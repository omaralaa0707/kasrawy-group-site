import type { KasrawyContent } from "./schema-ext";
import { PROFILE } from "./media";

export const ar: KasrawyContent = {
  locale: "ar",
  dir: "rtl",

  brand: {
    name: "مجموعة القصراوي",
    shortName: "القصراوي",
    tagline: "موزّع سيارات متعدد الماركات",
  },

  nav: [
    { label: "الماركات", href: "#brands" },
    { label: "الكُتّاب", href: "#authors" },
    { label: "البوابة", href: "#gate" },
    { label: "الخبر", href: "#news" },
  ],

  hero: {
    eyebrow: "مصر",
    headline: "ولا سيارة واحدة للبيع",
    sub: "من بين المنشورات الأحد عشر المصدر منها هذا الحساب، ولا واحد منها سيارة فردية بسعر. مجموعة القصراوي موزّع متعدد الماركات، لا تاجر سيارات مستعملة، وحسابها يعكس ذلك: افتتاحات مواسم لمراكز الخدمة، مناسبات وطنية، حفل توقيع لإطلاق ماركة، وتغطية مجلة لحدث تجربة قيادة. هذه الصفحة توثّق ما يحتويه فعلاً حساب موزّع، بدلًا من التظاهر بأنه صالة عرض.",
    primaryCta: "زوروا عبر الخرائط",
    secondaryCta: "شاهد الماركات",
    finding: "سبعة منشورات كتبتها المجموعة نفسها. أربعة كتبتها ثلاث جهات إعلامية خارجية مختلفة، تحت أسمائها الخاصة.",
    counts: [
      { value: PROFILE.posts, label: "منشور على إنستجرام" },
      { value: PROFILE.rendering, label: "يظهر بدون تسجيل دخول" },
      { value: "4", label: "ماركات مُصنِّعة ممثَّلة" },
      { value: "0", label: "إعلان سيارة فردية" },
    ],
  },

  about: { heading: "مجموعة القصراوي", body: [] },
  services: { heading: "الماركات", items: [] },
  gallery: { heading: "الماركات", items: [] },

  brands: {
    eyebrow: "الماركات",
    heading: "محفظة موزّع، لا مخزون تاجر",
    intro: "مجموعة القصراوي تمثّل امتيازات مُصنِّعين بدلًا من الاحتفاظ بمخزون مستعمل. ما هو مؤكد فعليًا في المصادر المتاحة، ماركة بماركة:",
    statusRepresented: "ممثَّلة",
    statusAnnounced: "مُعلَنة",
    highlightFootnote: "ماركة خامسة، AITO، مذكورة في قصة مثبّتة (\"توقيع AITO\") لكنها لا تظهر في أي شيء آخر مصدر منه هنا — لا في منشور، ولا في قائمة الماركات التي قدّمتها المجموعة نفسها لصحفي يغطي إطلاق منصتهم.",
    evidence: {
      Jetour: "حفل افتتاح، وإطلاق مركز خدمة، وحفل توقيع رعاية مع النادي الأهلي.",
      JAC: "مركز خدمة جديد في الساحل الشمالي، افتُتح لموسم الصيف.",
      "Citroën": "مركز خدمة في الساحل الشمالي، وحدث إطلاق C5 Aircross Extended.",
      Avatr: "مذكورة في قصة إطلاق ElTawkeel.com كماركة \"يُتوقع انضمامها لاحقًا\" — غير ممثَّلة بعد.",
    },
  },

  authors: {
    eyebrow: "الكُتّاب",
    heading: "أربعة من أحد عشر منشورًا تبدأ باسم آخر",
    intro: "سبعة من المنشورات الأحد عشر المصدر منها منشورة حصريًا باسم مجموعة القصراوي: تهانٍ بالمناسبات وإعلانات مراكز الخدمة الثلاثة في الساحل الشمالي هذا الصيف. الأربعة الباقية منشورات مشتركة، وتبدأ بتوقيع حساب إعلامي أو علاقات عامة خارجي بدلًا من اسم المجموعة نفسها — وكل واحد منها يغطي حدثًا أو خبرًا، لا إعلانًا روتينيًا أبدًا.",
    selfLabel: "مجموعة القصراوي",
    collabLabel: "بالتعاون مع",
    summaries: {
      DcdDSlvjJ6A: "تهنئة بمناسبة المولد النبوي الشريف",
      Dbn6arVlljF: "مركز خدمة JAC، الساحل الشمالي",
      Dbn6POoFp7G: "خدمة سيتروين، الساحل الشمالي",
      Dbn6F4XFjiK: "مركز خدمة JETOUR، الساحل الشمالي",
      DbIFBOODPJT: "تهنئة بذكرى ثورة 23 يوليو",
      DZncACXluS7: "تهنئة بالعام الهجري الجديد",
      DY0LCAjty12: "تهنئة بعيد الأضحى",
      "DYe6oy9jSs7": "إطلاق منصة ElTawkeel.com، بتغطية CairoScene",
      "DYc2cxmDe-F": "حفل توقيع Jetour × النادي الأهلي، بتغطية Slick Management",
      DYb80ppDTZt: "إطلاق Citroën C5 Aircross Extended، بتغطية Entourage",
      DYYAZdiDZ7N: "افتتاح معرض Jetour الرئيسي، بتغطية Entourage",
    },
  },

  gate: {
    eyebrow: "البوابة",
    heading: "علامتهم، قائمة بذاتها",
    intro: "العمل الفني الخاص بمجموعة القصراوي — بوابة ضخمة مبنية من حرفي \"K\" متشابكين — تظهر في كلا منشوريهما بالمناسبات المصدر منهما هنا. هذا العمل الفني صورة مركّبة، لا صورة فوتوغرافية لمبنى حقيقي، لذلك لا يُعرض هنا؛ الشيء الحقيقي هو العلامة نفسها، شعار \"K K\" المتشابك الصغير في زاوية كل منشور. أُعيد بناؤه كمجسم أدناه.",
  },

  news: {
    eyebrow: "الخبر",
    heading: "القصة الوحيدة بتوقيع ليس علاقات عامة",
    sourceLabel: "كما نشرته",
    partnersLabel: "الشركاء الماليون المذكورون في التقرير",
    // مقتبس حرفيًا بالإنجليزية من مقال CairoScene؛ يبقى كما نُشر في اللغتين.
    quote: "ElTawkeel.com, a digital marketplace for car sales and services, and Kasrawy Group have launched what they describe as Egypt's first fully integrated automotive e-commerce platform for new vehicles.",
    detail: "Users can browse and compare newly released vehicle models available in the Egyptian market, including brands represented by Kasrawy Group such as Jetour, JAC, and Citroen, with additional brands including Avatr expected to join later.",
  },

  contact: {
    heading: "تواصل معهم",
    addressLabel: "الموقع",
    address: "القاهرة، مصر",
    phoneLabel: "الهاتف",
    phones: [],
    mapsUrl: PROFILE.mapsUrl,
    instagramUrl: PROFILE.url,
    cta: "افتح في الخرائط",
    noPhoneNote: "لا يظهر أي رقم هاتف في أي مكان في المصادر المتاحة — السيرة الذاتية تحمل رابط خرائط فقط ولا شيء آخر.",
  },

  footer: {
    disclaimer: "تصميم مفاهيمي، بُني كعرض توضيحي. ليس موقعًا رسميًا لمجموعة القصراوي وغير تابع لها. جميع العلامات والنصوص المقتبسة ملك لمجموعة القصراوي أو لمصادرها المذكورة؛ التعليقات مقتبسة كما نُشرت.",
    rights: "بتصميم Claude",
  },

  a11y: {
    toggleLanguage: "Switch to English",
    openMenu: "افتح القائمة",
    closeMenu: "أغلق القائمة",
  },
};
