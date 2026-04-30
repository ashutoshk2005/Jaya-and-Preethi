// ============================================================
//  data/products.js
//  ✏️  ADD / EDIT / REMOVE PRODUCTS HERE
//  Images are referenced from config/images.js (p01, p02 ...)
// ============================================================

import IMAGES from '../config/images';

const PRODUCTS = [

  // ── Blue & White ─────────────────────────────────────────
  {
    id: 1,
    name:      "Elegant Blue Floral Oval Platter",
    material:  "Ceramic",
    category:  "Blue & White",
    price:     780,
    img:       IMAGES.p01,
    desc:      "Hand-painted cobalt blue motifs on fine white ceramic. Food-safe and dishwasher-safe. Ideal as a serving platter or wall display piece.",
  },
  {
    id: 2,
    name:      "Classic Blue Blossom Ceramic Kettle",
    material:  "Ceramic",
    category:  "Blue & White",
    price:     1680,
    img:       IMAGES.p02,
    desc:      "Porcelain kettle with intricate blossom pattern and a gold-dipped spout. Suitable for display or light use. 600ml capacity.",
  },
  {
    id: 3,
    name:      "Royal Blue Heritage Oval Platter",
    material:  "Ceramic",
    category:  "Blue & White",
    price:     2200,
    img:       IMAGES.p03,
    desc:      "Heritage-inspired oval platter with deep cobalt motifs. A perfect centrepiece for any dining table or sideboard.",
  },
  {
    id: 4,
    name:      "Classic Blue Floral Square Bowl",
    material:  "Ceramic",
    category:  "Blue & White",
    price:     1480,
    img:       IMAGES.p04,
    desc:      "Square ceramic bowl with delicate floral arrangement in cobalt blue. Microwave safe. 18cm × 18cm.",
  },

  // ── Royal Family ──────────────────────────────────────────
  {
    id: 5,
    name:      "Antique Floral Silver Crest Table Lamp",
    material:  "Resin",
    category:  "Royal Family",
    price:     12600,
    img:       IMAGES.p05,
    desc:      "Opulent resin base with antique silver crest detailing and a cream drum shade. E27 bulb fitting. Height: 62cm.",
  },
  {
    id: 6,
    name:      "Royal Florentine Heritage Decorative Bowl",
    material:  "Resin",
    category:  "Royal Family",
    price:     4600,
    img:       IMAGES.p06,
    desc:      "Florentine-inspired decorative bowl with 24K gold accents and a fitted lid. Display-only piece. Diameter: 22cm.",
  },
  {
    id: 7,
    name:      "Crimson Blossom Heritage Decorative Bowl",
    material:  "Resin",
    category:  "Royal Family",
    price:     4400,
    img:       IMAGES.p07,
    desc:      "Rich crimson glaze with gilt blossom motifs — a collector's statement piece. Display use only.",
  },
  {
    id: 8,
    name:      "Crimson Blossom Heritage Set of 4",
    material:  "Resin",
    category:  "Royal Family",
    price:     18530,
    oldPrice:  21800,
    save:      "15%",
    img:       IMAGES.p08,
    desc:      "Full four-piece set — matching bowl, vase, urn, and tray in crimson and gilt. A complete royal vignette for your console or mantle.",
  },

  // ── Table Top ────────────────────────────────────────────
  {
    id: 9,
    name:      "Ornate Filigree Accent Egg – Blue",
    material:  "Ceramic",
    category:  "Table Top",
    price:     4600,
    img:       IMAGES.p09,
    desc:      "Intricately filigreed ceramic accent egg in deep sapphire blue. Height: 18cm. Ideal for bookshelves and side tables.",
  },
  {
    id: 10,
    name:      "Ornate Filigree Accent Egg – Golden",
    material:  "Ceramic",
    category:  "Table Top",
    price:     4600,
    img:       IMAGES.p10,
    desc:      "Same exquisite filigree craftsmanship in warm burnished gold glaze. Height: 18cm.",
  },
  {
    id: 11,
    name:      "Ribbed Glass Hourglass Sand Clock – 10 Min",
    material:  "Glass",
    category:  "Table Top",
    price:     860,
    img:       IMAGES.p11,
    desc:      "Ribbed glass hourglass with natural sand — a timeless 10-minute desk accessory. Height: 21cm.",
  },
  {
    id: 12,
    name:      "Smoked Hourglass Sand Clock – 1 Hour",
    material:  "Glass",
    category:  "Table Top",
    price:     2640,
    img:       IMAGES.p12,
    desc:      "Smoked glass hourglass with matte marble base. 1-hour sand flow. Height: 28cm.",
  },

  // ── Lighting ─────────────────────────────────────────────
  {
    id: 13,
    name:      "Cascading Crystal Chandelier",
    material:  "Crystal",
    category:  "Lighting",
    price:     38500,
    img:       IMAGES.p13,
    desc:      "Grand chandelier with hand-strung crystal droplets. 60cm diameter. Suitable for living rooms and dining areas. E14 × 12 bulbs.",
  },
  {
    id: 14,
    name:      "Vintage Blue Vase Floor Lamp",
    material:  "Ceramic",
    category:  "Lighting",
    price:     9800,
    img:       IMAGES.p14,
    desc:      "Ceramic blue-and-white vase base with brushed brass pole and natural linen shade. Total height: 155cm. E27 fitting.",
  },
  {
    id: 15,
    name:      "Ruby Vase Table Lamp",
    material:  "Ceramic",
    category:  "Lighting",
    price:     7200,
    img:       IMAGES.p15,
    desc:      "Deep oxblood glaze ceramic vase lamp with pleated cream shade. Height: 58cm. Creates warm, intimate ambient light.",
  },
  {
    id: 16,
    name:      "Nordic Smoked Pendant Light",
    material:  "Glass",
    category:  "Lighting",
    price:     4100,
    img:       IMAGES.p16,
    desc:      "Minimalist smoked glass globe pendant. E27 fitting, UL-listed. Diameter: 25cm. Ideal for kitchen islands and dining tables.",
  },
];

export const CATEGORIES = ["All", "Blue & White", "Royal Family", "Table Top", "Lighting"];
export const MATERIALS  = ["Ceramic", "Resin", "Glass", "Crystal"];

export default PRODUCTS;
