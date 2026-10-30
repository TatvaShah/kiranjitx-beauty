import type { SiteConfig } from "@/lib/types";

const g = (n: number, width: number, height: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width, height, alt, caption, href });

export const site: SiteConfig = {
  name: "Kiranjit X Beauty",
  tagline: "Certified makeup and hair artist for brides and celebrations across Toronto and the GTA.",
  category: "Bridal makeup and hair",
  schemaType: "BeautySalon",
  area: "Toronto and the GTA, ON",
  siteUrl: "https://kiranjitx-beauty.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#1f1f1f" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Now booking bridal and non bridal",
    headline: "Glam for your biggest days",
    subhead: "Bridal, party and soft glam makeup and hair, based in the GTA and available for travel. Send a DM to check your date.",
    images: [
      { src: "/images/post-8.jpg", alt: "Bride in red with bridal makeup" },
      { src: "/images/post-2.jpg", alt: "Glam makeup with pink saree" },
      { src: "/images/post-7.jpg", alt: "Clean glam look" },
    ],
    secondaryCta: { label: "See the portfolio", href: "#gallery" },
  },

  highlights: ["Certified makeup and hair artist", "Bridal and non bridal", "Toronto and GTA based", "Available for travel"],

  about: {
    title: "Makeup and hair, made for you",
    body: [
      "Kiranjit is a certified makeup and hair artist based in Toronto and the GTA, creating bridal looks, soft glam for bridesmaids, mother of the groom makeup and clean glam for every celebration.",
      "Some looks are created alongside talented hair artists, and Kiranjit is available for travel for your event.",
    ],
    image: { src: "/images/post-10.jpg", alt: "Glam makeup with statement jewellery" },
  },

  menu: {
    label: "Services",
    title: "Makeup and hair",
    variant: "list",
    showPrices: false,
    priceNote: "Send a DM with your date for pricing and packages.",
    groups: [
      {
        title: "Bridal",
        items: [
          { name: "Bridal makeup" },
          { name: "Mother of the groom makeup" },
          { name: "Bridesmaid soft glam" },
        ],
      },
      {
        title: "Non bridal",
        items: [
          { name: "Party makeup" },
          { name: "Clean glam" },
          { name: "Hair styling" },
        ],
      },
    ],
  },

  gallery: {
    title: "Portfolio",
    items: [
      g(8, 1080, 1080, "Bride in red", "Bridal glam", "https://www.instagram.com/p/DejiTVplfL7/"),
      g(2, 1080, 1080, "Glam with pink saree", "Glam", "https://www.instagram.com/p/DfClaBUFb4L/"),
      g(3, 1080, 1080, "Glam with blue sequins", "Party glam", "https://www.instagram.com/p/De7AT-dFKtY/"),
      g(4, 1080, 1080, "Full traditional look", "Celebration glam", "https://www.instagram.com/p/De0N11UlLRe/"),
      g(5, 1080, 1080, "Soft glam with waves", "Bridesmaid soft glam", "https://www.instagram.com/p/Dewg8BQFeDU/"),
      g(7, 1080, 1080, "Clean glam", "Clean glam", "https://www.instagram.com/p/Deq423hujXG/"),
      g(9, 1080, 1080, "Elegant updo", "Mother of the groom", "https://www.instagram.com/p/DebvXASFer8/"),
      g(10, 1080, 1080, "Glam with mint outfit", "Sister of the bride", "https://www.instagram.com/p/DeXjOy8IDtG/"),
      g(11, 1080, 1080, "Braided updo", "Bridal hair", "https://www.instagram.com/p/DeJxvWqOWHs/"),
      g(12, 1080, 1080, "Low bun", "Hair styling", "https://www.instagram.com/p/DeJwoQUO0ue/"),
    ],
  },

  instagram: { handle: "kiranjitxbeauty", embeds: [] },

  order: {
    label: "How to book",
    title: "Check your date",
    intro: "Now booking bridal and non bridal. Tap the DM button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Kiranjit! I would like to book makeup and hair.\nEvent date:\nEvent type (bridal or non bridal):\nNumber of people:\nLocation:\nLook idea:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "Are you booking weddings?", a: "Yes, Kiranjit is booking bridal and non bridal. Send a DM with your date to check availability." },
    { q: "Do you travel?", a: "Yes. Kiranjit is based in Toronto and the GTA and is available for travel." },
    { q: "Do you do hair too?", a: "Yes, makeup and hair, including updos, waves and bridal hair." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Toronto and the GTA, available for travel",
    socials: [{ label: "TikTok", href: "https://www.tiktok.com/@kiranjitxbeauty" }],
  },

  seo: {
    title: "Kiranjit X Beauty | Bridal makeup and hair in Toronto and the GTA",
    description: "Kiranjit X Beauty is a certified makeup and hair artist in Toronto and the GTA for bridal, party and soft glam looks. Available for travel. DM to book.",
    keywords: ["bridal makeup Brampton", "makeup artist Toronto", "bridal hair and makeup GTA", "soft glam makeup Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
