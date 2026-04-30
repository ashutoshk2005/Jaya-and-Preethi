import { useEffect } from 'react';
import { fmt } from '../utils/format';
import SellerContactCard from './SellerContactCard';

/**
 * ProductModal
 * Opens when user clicks any product card.
 * Shows product details + SellerContactCard for purchasing.
 */
export default function ProductModal({ product, onClose, onAddCart }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="overlay"
      onClick={(e) => { if (e.target.className === 'overlay') onClose(); }}
    >
      <div className="pd">

        {/* LEFT — Product Image */}
        <div className="pd-img">
          <img src={product.img} alt={product.name} />
          <button className="pd-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* RIGHT — Product Details + Seller Contact */}
        <div className="pd-body">
          <span className="pd-mat">{product.material}</span>

          <div className="pd-name">{product.name}</div>

          <div className="pd-price">
            {fmt(product.price)}
            {product.oldPrice && (
              <span className="pd-price-old">{fmt(product.oldPrice)}</span>
            )}
            {product.save && (
              <span className="pd-save-badge">SAVE {product.save}</span>
            )}
          </div>

          <p className="pd-desc">{product.desc}</p>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <button
              className="btn-gold"
              style={{ flex: 1 }}
              onClick={() => { onAddCart(product); onClose(); }}
            >
              + Add to Cart
            </button>
            <button className="btn-outline-dark" onClick={onClose}>
              ← Back
            </button>
          </div>

          {/* ── SELLER CONTACT SECTION ── */}
          <span className="pd-cta-lbl">Buy directly from seller</span>
          <SellerContactCard product={product} />
        </div>

      </div>
    </div>
  );
}
