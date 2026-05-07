
import { fmt } from '../utils/format';
import SELLER from '../config/seller';

export default function CartDrawer({ cart, onClose, onRemove }) {
  const total    = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const quantity = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="cart-draw">
      <div className="cart-scrim" onClick={onClose} />

      <div className="cart-panel">
        {/* Header */}
        <div className="cart-hdr">
          <span>Cart ({quantity})</span>
          <button onClick={onClose}>×</button>
        </div>

        {/* Items */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              🛒<br />Your cart is empty
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div style={{ flex: 1 }}>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">
                    {fmt(item.price)} × {item.qty}
                  </div>
                </div>
                <button
                  className="cart-item-rm"
                  onClick={() => onRemove(item.id)}
                  aria-label="Remove"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-foot">
            <div className="cart-total">
              <span>Total</span>
              <span>{fmt(total)}</span>
            </div>
            <a
              className="btn-gold"
              style={{ width: '100%', padding: 14, display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}
              href={(() => {
                const items = cart.map(i => `${i.name} (x${i.qty}) - ${fmt(i.price * i.qty)}`).join('%0A');
                const totalMsg = `Total: ${fmt(total)}`;
                const msg = encodeURIComponent(`Order Details:%0A${items}%0A${totalMsg}`);
                return `https://wa.me/${SELLER.whatsapp}?text=${msg}`;
              })()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Proceed to Checkout
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
