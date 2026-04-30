import SELLER from '../config/seller';
import { fmt } from '../utils/format';

/**
 * SellerContactCard
 * Shown inside the ProductModal when a user wants to buy a product.
 * All seller details come from config/seller.js
 */
export default function SellerContactCard({ product }) {
  const waMsg = encodeURIComponent(
    `Hi! I'm interested in buying "${product.name}" (${fmt(product.price)}). Please share more details.`
  );
  const mailSubject = encodeURIComponent(`Enquiry: ${product.name}`);
  const mailBody    = encodeURIComponent(
    `Hi,\n\nI am interested in "${product.name}" priced at ${fmt(product.price)}.\nPlease share availability and shipping details.\n\nThank you.`
  );

  return (
    <div className="seller-card">
      <div className="seller-title">{SELLER.name}</div>
      <div className="seller-tag">{SELLER.tagline}</div>

      <div className="seller-row">
        <span className="seller-ico">📦</span>
        <div className="seller-info">
          Interested in <strong>"{product.name}"</strong>?<br />
          Contact the seller directly to place your order.
        </div>
      </div>

      <div className="seller-row">
        <span className="seller-ico">📞</span>
        <div className="seller-info">
          <strong>{SELLER.phone1}</strong><br />{SELLER.phone2}
        </div>
      </div>

      <div className="seller-row">
        <span className="seller-ico">✉️</span>
        <div className="seller-info">{SELLER.email}</div>
      </div>

      <div className="seller-row">
        <span className="seller-ico">🕐</span>
        <div className="seller-info">{SELLER.hours}</div>
      </div>

      <div className="seller-btns">
        <a
          className="s-wa"
          href={`https://wa.me/${SELLER.whatsapp}?text=${waMsg}`}
          target="_blank"
          rel="noreferrer"
        >
          <span>💬</span> WhatsApp
        </a>
        <a className="s-call" href={`tel:${SELLER.phone1}`}>
          📞 Call Now
        </a>
        <a
          className="s-mail"
          href={`mailto:${SELLER.email}?subject=${mailSubject}&body=${mailBody}`}
        >
          ✉️ Email
        </a>
      </div>

      <div className="seller-resp">⚡ {SELLER.response}</div>
    </div>
  );
}
