import { useState, useMemo, useEffect } from 'react';
import IMAGES from '../config/images';
import PRODUCTS from '../data/products';
import { TESTIMONIALS, CATEGORY_PILLS, MOSAIC_ITEMS, FEATURES } from '../data/static';
import ProductCard from '../components/ProductCard';

export default function HomePage({ navigate, onSelect }) {
  const tabKeys = useMemo(
    () => [...new Set(PRODUCTS.map((p) => String(p.category).trim()))],
    []
  );
  const [tab, setTab] = useState(() => tabKeys[0]);

  useEffect(() => {
    if (tabKeys.length && !tabKeys.includes(tab)) {
      setTab(tabKeys[0]);
    }
  }, [tab, tabKeys]);

  const tabProducts = PRODUCTS
    .filter((p) => String(p.category).trim() === tab)
    .slice(0, 4);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        <div className="hero-ov" />
        <div className="hero-c">
          <h1 className="hero-h">
            Bring Life <em>to Your</em> Walls
          </h1>
          <p className="hero-p">
            Turn empty walls into beautiful focal points with a perfect blend of
            decor and nature. Explore our curated collection of handcrafted pieces.
          </p>
          <div className="hero-btns">
            <button className="btn-gold" onClick={() => navigate('shop')}>
              Explore Collection
            </button>
            <button className="btn-ghost" onClick={() => navigate('shop')}>
              New Arrivals
            </button>
          </div>
        </div>
      </section>

      {/* ── CATEGORY STRIP ───────────────────────────────── */}
      <div className="cat-strip">
        <div className="cat-inner">
          {CATEGORY_PILLS.map((c) => (
            <button key={c.label} className="cat-pill" onClick={() => navigate('shop')}>
              <img className="cat-img" src={c.img} alt={c.label} loading="lazy" />
              <span className="cat-lbl">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── TABBED NEW ARRIVALS ───────────────────────────── */}
      <section className="p-section">
        <div className="sh">
          <span className="sh-eye">Just In</span>
          <h2 className="sh-h">New Arrivals</h2>
          <div className="sh-div" />
        </div>

        <div className="p-tabs">
          {tabKeys.map((t) => (
            <button
              key={t}
              className={`p-tab ${tab === t ? 'on' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="p-grid">
          {tabProducts.map((p) => (
            <ProductCard
              key={`${tab}-${p.id}-${String(p.category).trim()}`}
              product={p}
              onSelect={onSelect}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button className="btn-dark" onClick={() => navigate('shop')}>
            View All Products
          </button>
        </div>
      </section>

      {/* ── ROYAL FAMILY BANNER ──────────────────────────── */}
      <section className="banner">
        <div className="banner-bg" style={{ backgroundImage: `url(${IMAGES.bannerRoyal})` }} />
        <div className="banner-ov" />
        <div className="banner-c">
          <h2 className="banner-h">A Touch of<br />Royalty</h2>
          <p className="banner-p">
            Elevate your interiors with opulent designs that reflect heritage
            craftsmanship and refined style.
          </p>
          <button className="btn-wht" onClick={() => navigate('shop')}>
            Explore Royal Family
          </button>
        </div>
      </section>

      {/* ── KITCHEN MOSAIC ───────────────────────────────── */}
      <section className="mosaic">
        <div className="sh">
          <span className="sh-eye">For Your Kitchen</span>
          <h2 className="sh-h">Style Your Table, Every Day</h2>
          <div className="sh-div" />
        </div>
        <div className="mos-grid">
          {MOSAIC_ITEMS.map((m, i) => (
            <div key={i} className="mos-cell" onClick={() => navigate('shop')}>
              <img src={m.img} alt={m.label} loading="lazy" />
              <div className="mos-lbl">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTING BANNER ──────────────────────────────── */}
      <section className="banner">
        <div className="banner-bg" style={{ backgroundImage: `url(${IMAGES.bannerLighting})` }} />
        <div className="banner-ov" />
        <div className="banner-c">
          <h2 className="banner-h">Magical<br />Illumination</h2>
          <p className="banner-p">
            Create the perfect ambiance with lighting that adds warmth and
            style to every room.
          </p>
          <button className="btn-wht" onClick={() => navigate('shop')}>
            Explore Lighting
          </button>
        </div>
      </section>

      {/* ── FEATURES STRIP ───────────────────────────────── */}
      <div className="feats">
        {FEATURES.map((f) => (
          <div key={f.title} className="feat">
            <span className="feat-ico">{f.icon}</span>
            <div>
              <h4>{f.title}</h4>
              <p>{f.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="testi">
        <div className="sh">
          <span className="sh-eye">1 Lakh+ Happy Patrons</span>
          <h2 className="sh-h">Recognition &amp; Acclaim</h2>
          <div className="sh-div" />
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="testi-card">
              <p className="testi-q">"{t.quote}"</p>
              <span className="testi-a">— {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="nl">
        <h2>Join Our Inner Circle</h2>
        <p>Be first to discover new arrivals, exclusive offers, and decor inspiration.</p>
        <div className="nl-form">
          <input type="email" placeholder="Your email address" />
          <button type="button">Subscribe</button>
        </div>
      </section>
    </>
  );
}
