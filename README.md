# TheDecorKart — React Frontend

A luxury home decor e-commerce website built with React.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── config/
│   ├── images.js       ← ✏️  ALL images in one place (swap URLs here)
│   └── seller.js       ← ✏️  Seller name, phone, WhatsApp, email, hours
│
├── data/
│   ├── products.js     ← ✏️  Add/edit/remove products
│   └── static.js       ← ✏️  Testimonials, categories, FAQ content
│
├── utils/
│   └── format.js       ←  Currency formatter (₹)
│
├── styles/
│   └── global.css      ←  All styles & design tokens
│
├── components/
│   ├── Navbar.js          ←  Top navigation + mobile menu
│   ├── Footer.js          ←  Site footer
│   ├── ProductCard.js     ←  Product tile (shown in grids)
│   ├── ProductModal.js    ←  Detail popup when product is clicked
│   ├── SellerContactCard.js ← WhatsApp/Call/Email buttons for buying
│   ├── CartDrawer.js      ←  Slide-in cart panel
│   └── FAQ.js             ←  Accordion FAQ item
│
├── pages/
│   ├── HomePage.js        ←  Landing page
│   ├── ShopPage.js        ←  Product listing + filters
│   ├── AboutPage.js       ←  Brand story + stats
│   └── ContactPage.js     ←  Contact form + FAQ
│
├── App.js                 ←  Root: routing, cart state, modals
└── index.js               ←  React entry point
```

---

## ✏️ How to Edit

### Change Images
Open `src/config/images.js` and replace any URL:
```js
hero: "https://your-image-url.com/hero.jpg",
p01:  "https://your-image-url.com/product1.jpg",
```

### Change Seller Details
Open `src/config/seller.js`:
```js
phone1:   "+91 98000 00000",
whatsapp: "919800000000",
email:    "you@yourstore.com",
```

### Add a Product
Open `src/data/products.js` and add a new object:
```js
{
  id:       17,
  name:     "My New Product",
  material: "Ceramic",
  category: "Blue & White",
  price:    1200,
  img:      IMAGES.p01,          // reference from config/images.js
  desc:     "Product description here.",
},
```

### Change Testimonials or FAQ
Edit the arrays in `src/data/static.js`.

---

## 🛒 How Buying Works
1. User clicks any product card
2. A modal opens with full product details
3. Below the details: **Seller Contact Card** with:
   - 💬 WhatsApp (pre-filled message with product name & price)
   - 📞 Call Now
   - ✉️ Email (pre-filled subject & body)
4. All contact info comes from `src/config/seller.js`

---

## 📱 Responsive
- Desktop: full sidebar filters, multi-column grid
- Tablet: single column, sidebar hidden
- Mobile: hamburger menu, stacked layout
