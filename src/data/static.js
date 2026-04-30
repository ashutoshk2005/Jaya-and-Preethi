// ============================================================
//  data/static.js
//  ✏️  EDIT STATIC CONTENT — testimonials, categories, mosaic,
//      features, FAQ answers
// ============================================================

import IMAGES from '../config/images';

export const TESTIMONIALS = [
  {
    quote:  "I love quirky, unusual pieces blending together beautifully. The Decor Kart has such stunning accents — truly one of a kind.",
    author: "Tisca Chopra",
  },
  {
    quote:  "Can't get over these beauties. The quality and craftsmanship is exceptional — every piece tells a story worth displaying.",
    author: "Malaika Arora",
  },
  {
    quote:  "Platters are so versatile and must-haves. I use them on my dresser some days and they double as serving pieces — genius design.",
    author: "Nauheed Cyrusi",
  },
];

export const CATEGORY_PILLS = [
  { label: "New Arrivals", img: IMAGES.catNewArrivals },
  { label: "Royal Family", img: IMAGES.catRoyal       },
  { label: "Blue & White", img: IMAGES.catBlueWhite   },
  { label: "Decor",        img: IMAGES.catDecor        },
  { label: "Kitchen",      img: IMAGES.catKitchen      },
  { label: "Lighting",     img: IMAGES.catLighting     },
  { label: "Furniture",    img: IMAGES.catFurniture    },
];

export const MOSAIC_ITEMS = [
  { label: "Kitchen Storage",     img: IMAGES.mosaicStorage   },
  { label: "Cake & Tiered Stands",img: IMAGES.mosaicCake      },
  { label: "Serveware",           img: IMAGES.mosaicServeware },
  { label: "Kitchen Accessories", img: IMAGES.mosaicAccessory },
  { label: "Dinner Plates",       img: IMAGES.mosaicPlates    },
];

export const FEATURES = [
  { icon: "🚚", title: "Pay on Delivery",  sub: "No advance payment needed"     },
  { icon: "✅", title: "Crafted & Trusted", sub: "Over 12 years of excellence"  },
  { icon: "🔄", title: "Easy Returns",      sub: "Hassle-free 7-day returns"    },
  { icon: "💬", title: "24/7 Support",      sub: "Always here for you"          },
];

export const FAQS = [
  {
    q: "Do you offer pan-India delivery?",
    a: "Yes! We deliver to all major cities and most pin codes across India. Delivery times vary by location, typically 5–7 working days.",
  },
  {
    q: "What is your return policy?",
    a: "We offer easy returns within 7 days of delivery for most products. Items must be unused and in their original packaging.",
  },
  {
    q: "Do you offer bulk / B2B orders?",
    a: "Absolutely — we have a dedicated B2B program for interior designers, hotels, and corporate gifting. Contact us for special pricing.",
  },
  {
    q: "How do I track my order?",
    a: "You'll receive a tracking link via email and WhatsApp once your order ships. You can also use our Track Order feature.",
  },
  {
    q: "Can I visit a physical store?",
    a: "Yes! We have multiple store locations across India. Please contact us or check our website for the nearest store to you.",
  },
];
