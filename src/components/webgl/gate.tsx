"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { useWebglHealth } from "@/lib/use-webgl-health";

const GOLD = new THREE.Color("#D9A15C");
const DEPTH = 60;
const EXTRUDE_OPTS = { depth: DEPTH, bevelEnabled: true, bevelThickness: 5, bevelSize: 4, bevelSegments: 3, curveSegments: 12 };

type Fitted = { geometries: THREE.ExtrudeGeometry[]; scale: number; offsetX: number; offsetY: number };

/** Loads the traced mark, extrudes every shape, and computes a simple 2D
 *  bounding box directly from the shapes' own points -- not from a
 *  post-mount Box3/world-matrix pass, which depends on r3f's own render
 *  timing and produced NaN transforms the first time this was tried. */
function loadMark(svgText: string): Fitted {
  const loader = new SVGLoader();
  const data = loader.parse(svgText);
  const shapes: THREE.Shape[] = [];
  for (const path of data.paths) {
    shapes.push(...SVGLoader.createShapes(path));
  }

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const shape of shapes) {
    for (const pt of shape.getPoints(4)) {
      minX = Math.min(minX, pt.x);
      maxX = Math.max(maxX, pt.x);
      minY = Math.min(minY, pt.y);
      maxY = Math.max(maxY, pt.y);
    }
  }
  const width = Math.max(maxX - minX, 1);
  const height = Math.max(maxY - minY, 1);
  const scale = 1.7 / Math.max(width, height);

  return {
    geometries: shapes.map((s) => new THREE.ExtrudeGeometry(s, EXTRUDE_OPTS)),
    scale,
    offsetX: (minX + maxX) / 2,
    offsetY: (minY + maxY) / 2,
  };
}

function Mark() {
  const [fitted, setFitted] = useState<Fitted | null>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/mark.svg")
      .then((r) => r.text())
      .then((svgText) => {
        if (cancelled) return;
        setFitted(loadMark(svgText));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useFrame((_, dt) => {
    if (groupRef.current) groupRef.current.rotation.y += dt * 0.25;
  });

  if (!fitted) return null;
  const { geometries, scale, offsetX, offsetY } = fitted;

  return (
    <group ref={groupRef}>
      {/* SVG space is Y-down; flip Y here so the mark stands upright, and
          bake the measured centre offset straight into the static
          position -- no post-mount mutation, no camera repositioning. */}
      <group scale={[scale, -scale, scale]} position={[-offsetX * scale, offsetY * scale, -DEPTH * scale * 0.5]}>
        {geometries.map((geom, i) => (
          <mesh key={i} geometry={geom}>
            <meshStandardMaterial color={GOLD} metalness={0.55} roughness={0.32} side={THREE.DoubleSide} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0d0e12"]} />
      <Mark />
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <directionalLight position={[-4, -1, 2]} intensity={0.35} color="#8fa5c8" />
      <pointLight position={[0, 0, 6]} intensity={0.6} color={GOLD} distance={12} />
    </>
  );
}

export function Gate() {
  const [ready, setReady] = useState<boolean | null>(null);
  const { lost, bind } = useWebglHealth();

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const ctx = c.getContext("webgl2") || c.getContext("webgl");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReady(!!ctx);
    } catch {
      setReady(false);
    }
  }, []);

  return (
    <div className="gate-host relative aspect-square w-full min-w-0 overflow-hidden rounded-sm bg-panel sm:aspect-[16/9]">
      {ready && !lost ? (
        <Canvas camera={{ position: [0, 0, 4.4], fov: 38 }} dpr={[1, 1.5]} onCreated={({ gl }) => bind(gl.domElement)}>
          <Scene />
        </Canvas>
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6 text-center">
          <p className="fine text-muted">WebGL unavailable.</p>
        </div>
      )}
    </div>
  );
}
