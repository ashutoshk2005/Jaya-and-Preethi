import { useState, useEffect, useCallback } from 'react';

// Styles
import './styles/global.css';

// Layout
import Navbar     from './components/Navbar';
import Footer     from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';

// Pages
import HomePage    from './pages/HomePage';
import ShopPage    from './pages/ShopPage';
import AboutPage   from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [page,      setPage]      = useState('home');
  const [cart,      setCart]      = useState([]);
  const [cartOpen,  setCartOpen]  = useState(false);
  const [selected,  setSelected]  = useState(null);   // product shown in modal
  const [scrolled,  setScrolled]  = useState(false);
  const [shopQuery, setShopQuery] = useState('');

  // Scroll-to-top + navbar shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navigate = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Cart helpers
  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      return existing
        ? prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      {/* Navigation */}
      <Navbar
        page={page}
        navigate={navigate}
        cartCount={cartCount}
        onCart={() => setCartOpen(true)}
        scrolled={scrolled}
        onSearch={(q) => { setShopQuery(q); navigate('shop'); }}
      />

      {/* Page Content */}
      {page === 'home'    && <HomePage    navigate={navigate} onSelect={setSelected} />}
      {page === 'shop'    && <ShopPage    onSelect={setSelected} initialSearch={shopQuery} />}
      {page === 'about'   && <AboutPage   navigate={navigate} />}
      {page === 'contact' && <ContactPage />}

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Product Detail Modal (click any product card) */}
      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onAddCart={(p) => { addToCart(p); setCartOpen(true); }}
        />
      )}

      {/* Cart Slide Drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
        />
      )}
    </>
  );
}
