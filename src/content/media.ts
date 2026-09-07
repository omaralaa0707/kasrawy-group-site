/**
 * Kasrawy Group is not a used-car dealer — it is a multi-brand automotive
 * distributor. Of the eleven Instagram posts sourced here, not one is an
 * individual car listing with a price. Seven are self-published (holiday
 * greetings, seasonal service-centre announcements); four are collaborative
 * posts co-authored with three different outside media/PR accounts, and
 * open under that account's own name rather than the group's.
 */

export type Brand = {
  name: string;
  status: "represented" | "announced" | "highlight-only";
};

/** Evidence copy for each brand lives per-locale in en.ts/ar.ts, keyed by
 *  `name` below (`brands.evidence[name]`) — it's original editorial text,
 *  not a quote, so it has to be translated rather than isolated. */
export const BRANDS: Brand[] = [
  { name: "Jetour", status: "represented" },
  { name: "JAC", status: "represented" },
  { name: "Citroën", status: "represented" },
  { name: "Avatr", status: "announced" },
];

/** Named in a story highlight ("AITO signing") but absent from every post
 *  and from the brand list the group itself gave a journalist. */
export const HIGHLIGHT_ONLY = "AITO";

export type Post = {
  code: string;
  author: string;
  isCollab: boolean;
  kind: "greeting" | "service" | "news" | "event";
};

/** Summary copy for each post lives per-locale in en.ts/ar.ts, keyed by
 *  `code` below (`authors.summaries[code]`). */
export const POSTS: Post[] = [
  { code: "DcdDSlvjJ6A", author: "kasrawygroup", isCollab: false, kind: "greeting" },
  { code: "Dbn6arVlljF", author: "kasrawygroup", isCollab: false, kind: "service" },
  { code: "Dbn6POoFp7G", author: "kasrawygroup", isCollab: false, kind: "service" },
  { code: "Dbn6F4XFjiK", author: "kasrawygroup", isCollab: false, kind: "service" },
  { code: "DbIFBOODPJT", author: "kasrawygroup", isCollab: false, kind: "greeting" },
  { code: "DZncACXluS7", author: "kasrawygroup", isCollab: false, kind: "greeting" },
  { code: "DY0LCAjty12", author: "kasrawygroup", isCollab: false, kind: "greeting" },
  { code: "DYe6oy9jSs7", author: "cairoscene", isCollab: true, kind: "news" },
  { code: "DYc2cxmDe-F", author: "slickmanagement", isCollab: true, kind: "event" },
  { code: "DYb80ppDTZt", author: "entourage.egy", isCollab: true, kind: "event" },
  { code: "DYYAZdiDZ7N", author: "entourage.egy", isCollab: true, kind: "event" },
];

export const PROFILE = {
  handle: "kasrawygroup",
  url: "https://www.instagram.com/kasrawygroup/",
  followers: "10.1K",
  following: "11",
  posts: "532",
  rendering: "11",
  highlights: ["Avatr Launch", "AITO signing", "C4-yourself", "#CitroWon", "Citroen Event", "Kasrawy ads", "Automech 2018"],
  mapsUrl: "https://maps.app.goo.gl/Gnuew25xfyhqXzYg7",
} as const;

/** `quote` and `detail` are verbatim English sentences from the CairoScene
 *  article and are kept in en.ts/ar.ts as `news.quote`/`news.detail` rather
 *  than here, since they're quoted text (isolated with .latin in the RTL
 *  locale) rather than translated editorial copy. `headline` stays here as
 *  a shared constant for the same reason -- it's the article's own title. */
export const NEWS = {
  source: "CairoScene",
  headline: "Egypt's First Fully Integrated Vehicle App Lets You Buy & Insure Cars",
  partners: ["Valu", "ADIB Egypt"],
} as const;
