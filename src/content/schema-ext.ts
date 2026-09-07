import type { SiteContent } from "@/i18n/schema";
import { useContent } from "@/i18n/locale-provider";

export type KasrawyContent = SiteContent & {
  hero: SiteContent["hero"] & {
    finding: string;
    counts: { value: string; label: string }[];
  };
  brands: {
    eyebrow: string;
    heading: string;
    intro: string;
    statusRepresented: string;
    statusAnnounced: string;
    highlightFootnote: string;
    /** Keyed by Brand.name from media.ts. */
    evidence: Record<string, string>;
  };
  authors: {
    eyebrow: string;
    heading: string;
    intro: string;
    selfLabel: string;
    collabLabel: string;
    /** Keyed by Post.code from media.ts. */
    summaries: Record<string, string>;
  };
  gate: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  news: {
    eyebrow: string;
    heading: string;
    sourceLabel: string;
    partnersLabel: string;
    quote: string;
    detail: string;
  };
  contact: SiteContent["contact"] & {
    noPhoneNote: string;
  };
};

export function useKasrawy() {
  return useContent() as KasrawyContent;
}
