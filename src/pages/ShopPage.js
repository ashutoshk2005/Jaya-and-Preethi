import { useState } from 'react';
import PRODUCTS, { CATEGORIES, MATERIALS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage({ onSelect }) {
  const [selCats, setSelCats] = useState(['All']);
  const [selMats, setSelMats] = useState([]);
  const [sort,    setSort]    = useState('featured');
  const [search,  setSearch]  = useState('');

  const toggleCat = (c) => {
    if (c === 'All') { setSelCats(['All']); return; }
    setSelCats((prev) => {
      const next = prev.filter((x) => x !== 'All');
      const upd  = next.includes(c) ? next.filter((x) => x !== c) : [...next, c];
      return upd.length ? upd : ['All'];
    });
  };

  const toggleMat = (m) =>
    setSelMats((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );

  let filtered = PRODUCTS.filter((p) => {
    const catOk = selCats.includes('All') || selCats.includes(p.category);
    const matOk = selMats.length === 0   || selMats.includes(p.material);
    const srOk  = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return catOk && matOk && srOk;
  });

  if (sort === 'low')  filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === 'high') filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <>
      {/* Page Hero */}
      <div className="ph">
        <div className="ph-c">
          <div className="bc">Home / Shop</div>
          <h1>Our Collection</h1>
          <p>Handcrafted decor pieces curated for discerning homes across India.</p>
        </div>
      </div>

      <div className="shop-wrap">
        {/* ── FILTER SIDEBAR ──────────────────────────────── */}
        <aside className="filter">
          <div className="filter-grp">
            <h3>Category</h3>
            {CATEGORIES.map((c) => (
              <button key={c} className="fi" onClick={() => toggleCat(c)}>
                <div className={`chk ${selCats.includes(c) ? 'on' : ''}`}>
                  {selCats.includes(c) ? '✓' : ''}
                </div>
                {c}
              </button>
            ))}
          </div>

          <div className="filter-grp">
            <h3>Material</h3>
            {MATERIALS.map((m) => (
              <button key={m} className="fi" onClick={() => toggleMat(m)}>
                <div className={`chk ${selMats.includes(m) ? 'on' : ''}`}>
                  {selMats.includes(m) ? '✓' : ''}
                </div>
                {m}
              </button>
            ))}
          </div>
        </aside>

        {/* ── PRODUCT GRID ─────────────────────────────────── */}
        <div>
          <div className="shop-hdr">
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="shop-count">{filtered.length} products</span>
              <input
                className="s-input"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="s-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>

          <div className="p-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={onSelect} />
            ))}
            {filtered.length === 0 && (
              <div
                style={{
                  gridColumn: '1/-1', textAlign: 'center', padding: '80px 0',
                  fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--taupe)',
                }}
              >
                No products found. Try adjusting your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
