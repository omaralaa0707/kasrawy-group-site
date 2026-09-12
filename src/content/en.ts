import type { KasrawyContent } from "./schema-ext";
import { PROFILE } from "./media";

export const en: KasrawyContent = {
  locale: "en",
  dir: "ltr",

  brand: {
    name: "Kasrawy Group",
    shortName: "Kasrawy",
    tagline: "Multi-brand automotive distributor",
  },

  nav: [
    { label: "The brands", href: "#brands" },
    { label: "The authors", href: "#authors" },
    { label: "The gate", href: "#gate" },
    { label: "The news", href: "#news" },
  ],

  hero: {
    eyebrow: "Egypt",
    headline: "Not one car for sale",
    sub: "Of the eleven posts sourced from this account, not one is an individual car with a price. Kasrawy Group is a multi-brand distributor, not a used-car dealer, and its feed reads that way: seasonal service-centre openings, national holidays, a brand-launch signing, a magazine's coverage of a test-drive event. This page catalogues what an importer's feed actually contains, rather than pretending it contains a showroom.",
    primaryCta: "Visit on Maps",
    secondaryCta: "See the brands",
    finding: "Seven posts written by the group itself. Four written by three different outside agencies, under their own names.",
    counts: [
      { value: PROFILE.posts, label: "posts on Instagram" },
      { value: PROFILE.rendering, label: "render logged out" },
      { value: "4", label: "manufacturer brands represented" },
      { value: "0", label: "individual car listings" },
    ],
  },

  about: { heading: "Kasrawy Group", body: [] },
  services: { heading: "The brands", items: [] },
  gallery: { heading: "The brands", items: [] },

  brands: {
    eyebrow: "The brands",
    heading: "A distributor's portfolio, not a dealer's stock",
    intro: "Kasrawy Group represents manufacturer franchises rather than holding used inventory. What's actually evidenced in the sourced material, brand by brand:",
    statusRepresented: "Represented",
    statusAnnounced: "Announced",
    highlightFootnote: "A fifth marque, AITO, is named in a story highlight (\"AITO signing\") but appears in nothing else sourced here — not in a post, and not in the brand list Kasrawy Group itself gave a journalist covering their own platform launch.",
    evidence: {
      Jetour: "A flagship opening, a service-centre launch, and an Al Ahly FC sponsorship signing.",
      JAC: "A new North Coast service centre, opened for summer.",
      "Citroën": "A North Coast service centre, and a C5 Aircross Extended launch event.",
      Avatr: "Named in the ElTawkeel.com launch story as a brand \"expected to join later\" — not yet represented.",
    },
  },

  authors: {
    eyebrow: "The authors",
    heading: "Four of eleven posts open under someone else's name",
    intro: "Seven of the eleven sourced posts are published solely as Kasrawy Group: holiday greetings and the summer's three North Coast service-centre announcements. The other four are collaborative posts, and open with the byline of an outside media or PR account rather than the group's own — every one of them covering an event or a news story, never a routine announcement.",
    selfLabel: "Kasrawy Group",
    collabLabel: "Co-authored",
    summaries: {
      DcdDSlvjJ6A: "Al Mawlid Al Nabawi greeting",
      Dbn6arVlljF: "JAC Service Center, North Coast",
      Dbn6POoFp7G: "Citroën service, North Coast",
      Dbn6F4XFjiK: "JETOUR Service Center, North Coast",
      DbIFBOODPJT: "July 23rd Revolution Day greeting",
      DZncACXluS7: "New Hijri Year greeting",
      DY0LCAjty12: "Eid Al Adha greeting",
      "DYe6oy9jSs7": "ElTawkeel.com platform launch, reported by CairoScene",
      "DYc2cxmDe-F": "Jetour × Al Ahly FC signing, covered by Slick Management",
      DYb80ppDTZt: "Citroën C5 Aircross Extended launch, covered by Entourage",
      DYYAZdiDZ7N: "Jetour flagship opening, covered by Entourage",
    },
  },

  gate: {
    eyebrow: "The gate",
    heading: "Their mark, standing on its own",
    intro: "Kasrawy Group's own designed artwork — a monumental gate built from two interlocked \"K\"s — appears across both of their sourced holiday greetings. That artwork is composited imagery, not a photograph of a real structure, so it is not reproduced here; what is real is the mark itself, the small interlocked \"K K\" logotype in the corner of every post. Rebuilt as geometry below.",
  },

  news: {
    eyebrow: "The news",
    heading: "The one story with a byline that isn't PR",
    sourceLabel: "As reported by",
    partnersLabel: "Financial partners named in the report",
    quote: "ElTawkeel.com, a digital marketplace for car sales and services, and Kasrawy Group have launched what they describe as Egypt's first fully integrated automotive e-commerce platform for new vehicles.",
    detail: "Users can browse and compare newly released vehicle models available in the Egyptian market, including brands represented by Kasrawy Group such as Jetour, JAC, and Citroen, with additional brands including Avatr expected to join later.",
  },

  contact: {
    heading: "Find them",
    addressLabel: "Location",
    address: "Cairo, Egypt",
    phoneLabel: "Phone",
    phones: [],
    mapsUrl: PROFILE.mapsUrl,
    instagramUrl: PROFILE.url,
    cta: "Open in Maps",
    noPhoneNote: "No phone number appears anywhere in the sourced material — the bio carries a Maps link and nothing else.",
  },

  footer: {
    rights: "© Kasrawy Group. All rights reserved.",
  },

  a11y: {
    toggleLanguage: "التبديل إلى العربية",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};
