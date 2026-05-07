
// ============================================================
//  data/products.js
//  ✏️  ADD / EDIT / REMOVE PRODUCTS HERE
//  Images are referenced from config/images.js (p01, p02 ...)
// ============================================================

import IMAGES from '../config/images';


const PRODUCTS = [

  // ── Example Product Using Local Image ──
  // {
  //   id: 1001,
  //   name:      "Sample Local Image Product",
  //   material:  "Example Material",
  //   category:  "Example Category",
  //   price:     999,
  //   img:       IMAGES.example1,
  //   desc:      "This is a sample product using a local image stored in public/images/example1.jpg. Replace this with your own product details and image.",
  // },

  // // ── Blue & White ─────────────────────────────────────────
  // {
  //   id: 1,
  //   name:      "Elegant Blue Floral Oval Platter",
  //   material:  "Ceramic",
  //   category:  "Blue & White",
  //   price:     780,
  //   img:       IMAGES.p01,
  //   desc:      "Hand-painted cobalt blue motifs on fine white ceramic. Food-safe and dishwasher-safe. Ideal as a serving platter or wall display piece.",
  // },
  // {
  //   id: 2,
  //   name:      "Classic Blue Blossom Ceramic Kettle",
  //   material:  "Ceramic",
  //   category:  "Blue & White",
  //   price:     1680,
  //   img:       IMAGES.p02,
  //   desc:      "Porcelain kettle with intricate blossom pattern and a gold-dipped spout. Suitable for display or light use. 600ml capacity.",
  // },
  // {
  //   id: 3,
  //   name:      "Royal Blue Heritage Oval Platter",
  //   material:  "Ceramic",
  //   category:  "Blue & White",
  //   price:     2200,
  //   img:       IMAGES.p03,
  //   desc:      "Heritage-inspired oval platter with deep cobalt motifs. A perfect centrepiece for any dining table or sideboard.",
  // },
  // {
  //   id: 4,
  //   name:      "Classic Blue Floral Square Bowl",
  //   material:  "Ceramic",
  //   category:  "Blue & White",
  //   price:     1480,
  //   img:       IMAGES.p04,
  //   desc:      "Square ceramic bowl with delicate floral arrangement in cobalt blue. Microwave safe. 18cm × 18cm.",
  // },

  // // ── Royal Family ──────────────────────────────────────────
  // {
  //   id: 5,
  //   name:      "Antique Floral Silver Crest Table Lamp",
  //   material:  "Resin",
  //   category:  "Royal Family",
  //   price:     12600,
  //   img:       IMAGES.p05,
  //   desc:      "Opulent resin base with antique silver crest detailing and a cream drum shade. E27 bulb fitting. Height: 62cm.",
  // },
  // {
  //   id: 6,
  //   name:      "Royal Florentine Heritage Decorative Bowl",
  //   material:  "Resin",
  //   category:  "Royal Family",
  //   price:     4600,
  //   img:       IMAGES.p06,
  //   desc:      "Florentine-inspired decorative bowl with 24K gold accents and a fitted lid. Display-only piece. Diameter: 22cm.",
  // },
  // {
  //   id: 7,
  //   name:      "Crimson Blossom Heritage Decorative Bowl",
  //   material:  "Resin",
  //   category:  "Royal Family",
  //   price:     4400,
  //   img:       IMAGES.p07,
  //   desc:      "Rich crimson glaze with gilt blossom motifs — a collector's statement piece. Display use only.",
  // },
  // {
  //   id: 8,
  //   name:      "Crimson Blossom Heritage Set of 4",
  //   material:  "Resin",
  //   category:  "Royal Family",
  //   price:     18530,
  //   oldPrice:  21800,
  //   save:      "15%",
  //   img:       IMAGES.p08,
  //   desc:      "Full four-piece set — matching bowl, vase, urn, and tray in crimson and gilt. A complete royal vignette for your console or mantle.",
  // },

  // // ── Table Top ────────────────────────────────────────────
  // {
  //   id: 9,
  //   name:      "Ornate Filigree Accent Egg – Blue",
  //   material:  "Ceramic",
  //   category:  "Table Top",
  //   price:     4600,
  //   img:       IMAGES.p09,
  //   desc:      "Intricately filigreed ceramic accent egg in deep sapphire blue. Height: 18cm. Ideal for bookshelves and side tables.",
  // },
  // {
  //   id: 10,
  //   name:      "Ornate Filigree Accent Egg – Golden",
  //   material:  "Ceramic",
  //   category:  "Table Top",
  //   price:     4600,
  //   img:       IMAGES.p10,
  //   desc:      "Same exquisite filigree craftsmanship in warm burnished gold glaze. Height: 18cm.",
  // },
  // {
  //   id: 11,
  //   name:      "Ribbed Glass Hourglass Sand Clock – 10 Min",
  //   material:  "Glass",
  //   category:  "Table Top",
  //   price:     860,
  //   img:       IMAGES.p11,
  //   desc:      "Ribbed glass hourglass with natural sand — a timeless 10-minute desk accessory. Height: 21cm.",
  // },
  // {
  //   id: 12,
  //   name:      "Smoked Hourglass Sand Clock – 1 Hour",
  //   material:  "Glass",
  //   category:  "Table Top",
  //   price:     2640,
  //   img:       IMAGES.p12,
  //   desc:      "Smoked glass hourglass with matte marble base. 1-hour sand flow. Height: 28cm.",
  // },

  // // ── Lighting ─────────────────────────────────────────────
  // {
  //   id: 13,
  //   name:      "Cascading Crystal Chandelier",
  //   material:  "Crystal",
  //   category:  "Lighting",
  //   price:     38500,
  //   img:       IMAGES.p13,
  //   desc:      "Grand chandelier with hand-strung crystal droplets. 60cm diameter. Suitable for living rooms and dining areas. E14 × 12 bulbs.",
  // },
  // {
  //   id: 14,
  //   name:      "Vintage Blue Vase Floor Lamp",
  //   material:  "Ceramic",
  //   category:  "Lighting",
  //   price:     9800,
  //   img:       IMAGES.p14,
  //   desc:      "Ceramic blue-and-white vase base with brushed brass pole and natural linen shade. Total height: 155cm. E27 fitting.",
  // },
  // {
  //   id: 15,
  //   name:      "Ruby Vase Table Lamp",
  //   material:  "Ceramic",
  //   category:  "Lighting",
  //   price:     7200,
  //   img:       IMAGES.p15,
  //   desc:      "Deep oxblood glaze ceramic vase lamp with pleated cream shade. Height: 58cm. Creates warm, intimate ambient light.",
  // },
  // {
  //   id: 16,
  //   name:      "Nordic Smoked Pendant Light",
  //   material:  "Glass",
  //   category:  "Lighting",
  //   price:     4100,
  //   img:       IMAGES.p16,
  //   desc:      "Minimalist smoked glass globe pendant. E27 fitting, UL-listed. Diameter: 25cm. Ideal for kitchen islands and dining tables.",
  // },

  // ── Slippers ───────────────────────────────────────────
  {
    id: 3001,
    name:      "Cozy Cotton Home Slippers",
    material:  "Cotton",
    category:  "Slippers",
    price:     350,
    img:       IMAGES.cozySlippers,
    desc:      "Soft, breathable cotton slippers perfect for indoor comfort. Machine washable. Available in multiple sizes.",
  },



  //-- ── Pillows ───────────────────────────────────────────
{
  id: 4001,
  name:      "White Pillow",
  Colour:  "White",
  category:  "Pillows",
  price:     200,
  img:       IMAGES.Whitepillow,
  desc:      "Sumptuously soft velvet throw pillow with a plush down alternative insert. Available in rich jewel tones. Size: 18” × 18”.",

},

{
  id: 4002,
  name:      "Red Pillow",
  Colour:  "Red",
  category:  "Pillows",
  price:     200,
  img:       IMAGES.RedPillow,
  desc:      "Sumptuously soft velvet throw pillow with a plush down alternative insert. Available in rich jewel tones. Size: 18” × 18”.",
},

{
  id: 4003,
  name:      "Black Pillow",
  Colour:  "Black",
  category:  "Pillows",
  price:     200,
  img:       IMAGES.BlackPillow,
  desc:      "Sumptuously soft velvet throw pillow with a plush down alternative insert. Available in rich jewel tones. Size: 18” × 18”.",
},

{
  id: 4004,
  name:      "Warm White Pillow",
  Colour:  "Warm White",
  category:  "Pillows",
  price:     550,
  img:       IMAGES.WarmWhitePillow,
  desc:      "Set of three velvet throw pillows in deep sapphire, emerald, and ruby hues. Each pillow includes a plush down alternative insert. Size: 18” × 18”.",
},




// ── Carpets & Runners ───────────────────────────────────────────

{
id: 5001,
name:      "Premium Comfort Runner",
Weight:  "700 Grams",
category:  "Runners & Carpets",
price:     699,
img:       IMAGES.Runners,
desc:      "Hand-tufted wool area rug with intricate Persian-inspired patterns in rich reds and blues. Size: 22’ × 55’ Inches. Durable and soft underfoot, perfect for living rooms and bedrooms.",
},


{
id: 5005,
name:      "Carpets",
Weight:  "500 Grams",
category:  "Runners & Carpets",
price:     1200,
img:       IMAGES.Carpets,
desc:      "Hand-tufted wool area rug with intricate Persian-inspired patterns in rich Multicolors. Durable and soft underfoot, perfect for living rooms and bedrooms."
},



// ── Washbags & Travel Accessories ───────────────────────────────────────────
{
id: 5002,
name:      "Travel Washbag",
Weight:  "200 Grams",
category:  "Bags",
price:     499,
img:       IMAGES.Washbags,
desc:      "Compact travel washbag with multiple compartments for organizing toiletries. Lightweight and easy to pack. Ideal for business trips and vacations.",
},


{
  id: 5004,
  name:      "Jumbo Size Double Bed Blanket Bag",
  Material:  "Canvas",
  category:  "Bags",
  price:     1200,
  img:       IMAGES.BlanketBag,
  desc:      "Oversized canvas blanket bag with sturdy handles and a secure zip closure. Perfect for storing and transporting large bedding items like comforters and quilts.",
},





// ── Dusters & Cleaning Accessories ───────────────────────────────────────────

{

id: 5003,
name:      "Ceiling Fan Duster",
category:  "Dusters",
price:     299,
img:       IMAGES.CeilingFanDuster,
desc:      "Soft-bristled ceiling fan duster for gentle cleaning of fan blades. Lightweight and easy to use. Ideal for maintaining clean air circulation.",

},



//kitchen items can be added here with category "Kitchen"



{
  id: 6001,
name:      "Apron",
Material:  "Ceramic",
category:  "Kitchen",
price:     799,
img:       IMAGES.Apron,
desc:      "Apron for cooking and baking needs.",
},



//bedsheets can be added here with category "bedsheets"

{
  id: 7001,
name:      "Bedsheets",
Material:  "Cotton",
category:  "bedsheets",
price:     1999,
img:       IMAGES.BedSheets,
desc:      "Luxurious cotton bedsheets with a high thread count for ultimate comfort. Available in a range of colors and patterns to suit any bedroom decor. Soft, breathable, and durable for a restful night's sleep.",
},



// ── Others ───────────────────────────────────────────

{
  id: 9001,
name:      "Dental Kit",
Material:  "Plastic",
category:  "Others",
price:     499,
img:       IMAGES.DentalKit,
desc:      "Complete dental kit with toothbrush, toothpaste, floss, and mouthwash. Compact and travel-friendly design. Ideal for maintaining oral hygiene on the go."
},




// ── Cushions ───────────────────────────────────────────



{
  id: 10001,
name:      "Cushions",
Material:  "Fibre Filling",
category:  "Cushions",
price:     999,
img:       IMAGES.Cushion,
desc:      "Luxury floor cushions in a range of colors and patterns. Perfect for adding comfort and style to any living space. Size: 40” × 40”.",
},

];

export const CATEGORIES = ["All", "Blue & White", "Royal Family", "Table Top", "Lighting", "Kitchen", "Slippers", "Pillows", "Runners & Carpets", "Bags", "Dusters", "bedsheets", "Others", "Cushions"];
export const MATERIALS  = ["Ceramic", "Resin", "Glass", "Crystal"];

export default PRODUCTS;
