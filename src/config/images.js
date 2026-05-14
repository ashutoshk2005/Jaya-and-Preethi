// ============================================================
//  config/images.js
//  ✏️  EDIT ALL IMAGES HERE — just swap the URLs
// ============================================================

// Bundled so production hosts (e.g. Vercel) always resolve URLs via /static/media/
// instead of relying on /public/images alone (avoids routing/cache edge cases).
import doorImg01 from '../assets/doormats/DoorMats01.jpeg';
import doorImg02 from '../assets/doormats/DoorMats02.jpeg';
import doorImg03 from '../assets/doormats/DoorMats03.jpeg';
import doorImg04 from '../assets/doormats/DoorMats04.jpeg';
import doorImg05 from '../assets/doormats/DoorMats05.jpeg';
import doorImg06 from '../assets/doormats/DoorMats06.jpeg';

const IMAGES = {

  // ── Hero & Full-Width Banners ─────────────────────────────
  //  Replace these URLs with your own hosted image links
  hero: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80",
  bannerRoyal: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80",
  bannerLighting: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1600&q=80",
  bannerKitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
  aboutMain: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",

  // ── Category Circle Images (shown in nav strip) ───────────
  catNewArrivals: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=200&q=80",
  catRoyal: "https://images.unsplash.com/photo-1513506003901-1e6a35eb3d62?w=200&q=80",
  catBlueWhite: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=200&q=80",
  catDecor: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&q=80",
  catKitchen: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&q=80",
  catLighting: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=200&q=80",
  catFurniture: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80",

  // ── Kitchen Mosaic Section ────────────────────────────────
  mosaicStorage: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80",
  mosaicCake: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
  mosaicServeware: "https://images.unsplash.com/photo-1622560480605-d83c661028c5?w=600&q=80",
  mosaicAccessory: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  mosaicPlates: "https://images.unsplash.com/photo-1589985270958-bf087b8dc509?w=600&q=80",

  // ── Product Images ────────────────────────────────────────
  //  p01 → p16 map to products in data/products.js
  p01: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=500&q=80",
  p02: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
  p03: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&q=80",
  p04: "https://images.unsplash.com/photo-1589985270958-bf087b8dc509?w=500&q=80",
  p05: "https://images.unsplash.com/photo-1513506003901-1e6a35eb3d62?w=500&q=80",
  p06: "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=500&q=80",
  p07: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",

  // ── Local Example Images ─────────────────────────────────
  example1: "/images/example1.jpg",
  example2: "/images/example2.jpg",
  example3: "/images/example3.jpg",
  cozySlippers: "/images/slp.jpeg",
  cozySlippers1: "/images/slp1.jpeg",
  cozySlippers2: "/images/slp2.jpeg",
  Whitepillow: "/images/WhitePillow.jpeg",
  RedPillow: "/images/RedPillow.jpeg",
  BlackPillow: "/images/BlackPillow.jpeg",
  WarmWhitePillow: "/images/WarmWhitePillow.jpeg",
  Runners: "/images/Runners.jpeg",
  Washbags: "/images/Washbags.jpeg",
  CeilingFanDuster: "/images/CeilingFanDuster.jpeg",
  Apron: "/images/Apron.jpeg",
  BlanketBag: "/images/BlanketBag.jpeg",
  Carpets: "/images/Carpets.jpeg",
  Carpets2: "/images/Carpets2.jpeg",
  Carpets3: "/images/Carpets3.jpeg",
  Carpets4: "/images/Carpets4.jpeg",
  BedSheets: "/images/BedSheets.jpeg",
  BedSheets2: "/images/BedSheets2.jpeg",
  BedSheets3: "/images/BedSheets3.jpeg",
  BedSheets4: "/images/BedSheets4.jpeg",
  BedSheets5: "/images/BedSheets5.jpeg",
  BedSheets6: "/images/BedSheets6.jpeg",
  KitchenMats: "/images/KitchenMats.jpeg",
  KitchenMats2: "/images/KitchenMats2.jpeg",
  KitchenMats3: "/images/KitchenMats3.jpeg",
  KitchenMats4: "/images/KitchenMats4.jpeg",
  DentalKit: "/images/DentalKit.jpeg",
  Cushion: "/images/Cushion.jpeg",
  Cushion2: "/images/Cushion2.jpeg",
  Cushion3: "/images/Cushion3.jpeg",
  Cushion4: "/images/Cushion4.jpeg",
  Cushion5: "/images/Cushion5.jpeg",
  Cushion6: "/images/Cushion6.jpeg",

  FoodMats: "/images/FoodMats.jpeg",
  FoodMats2: "/images/FoodMats2.jpeg",
  FoodMats3: "/images/FoodMats3.jpeg",
  FoodMats4: "/images/FoodMats4.jpeg",
  FoodMats5: "/images/FoodMats5.jpeg",
  FoodMats6: "/images/FoodMats6.jpeg",
  TableRunner: "/images/TableRunner.jpeg",
  TableRunner2: "/images/TableRunner2.jpeg",
  TableRunner3: "/images/TableRunner3.jpeg",

  Doormats: doorImg01,
  Doormats2: doorImg02,
  Doormats3: doorImg03,
  Doormats4: doorImg04,
  Doormats5: doorImg05,
  Doormats6: doorImg06,





  p08: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80",
  p09: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  p10: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=80",
  p11: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  p12: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=500&q=80",
  p13: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=500&q=80",
  p14: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&q=80",
  p15: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&q=80",
  p16: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
};

export default IMAGES;
