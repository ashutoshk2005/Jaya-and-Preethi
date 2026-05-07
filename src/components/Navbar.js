import { useState } from 'react';

const LINKS = [
  ['home',    'Home'],
  ['shop',    'Shop'],
  ['about',   'About'],
  ['contact', 'Contact'],
];

export default function Navbar({ page, navigate, cartCount, onCart, scrolled, onSearch }) {
  const [mob, setMob] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [q, setQ] = useState('');

  const go = (p) => { navigate(p); setMob(false); };
  const submitSearch = () => {
    const next = q.trim();
    if (!next) return;
    onSearch?.(next);
    setShowSearch(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <button className="burger" onClick={() => setMob(true)}>
          <span /><span /><span />
        </button>

        <button className="nav-logo" onClick={() => go('home')}>
          Jaya & Preeti Lifestyle
        </button>

        <ul className="nav-links">
          {LINKS.map(([p, l]) => (
            <li key={p}>
              <button
                onClick={() => go(p)}
                className={page === p ? 'active' : ''}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {showSearch && (
            <form
              onSubmit={(e) => { e.preventDefault(); submitSearch(); }}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <input
                className="s-input"
                placeholder="Search products…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                autoFocus
              />
            </form>
          )}
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => {
              const next = !showSearch;
              setShowSearch(next);
              if (!next) setQ('');
            }}
          >
            🔍
          </button>
          {/* <button className="icon-btn" aria-label="Account">👤</button> */}
          <button className="icon-btn" aria-label="Cart" onClick={onCart}>
            🛒
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div className={`mob ${mob ? 'open' : ''}`}>
        <button className="mob-x" onClick={() => setMob(false)}>×</button>
        {LINKS.map(([p, l]) => (
          <button key={p} onClick={() => go(p)}>{l}</button>
        ))}
      </div>
    </>
  );
}
