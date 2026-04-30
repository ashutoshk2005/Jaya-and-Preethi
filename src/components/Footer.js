import SELLER from '../config/seller';

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div>
          <span className="f-logo">Jaya & Preeti Lifestyle</span>
          <p className="f-tag">
            Bringing heritage craftsmanship and refined style to homes across
            India. Every piece tells a story.
          </p>
          <div className="f-social">
            <a href={SELLER.facebook}  target="_blank" rel="noreferrer" className="soc">f</a>
            <a href={SELLER.instagram} target="_blank" rel="noreferrer" className="soc">in</a>
            <a href={SELLER.pinterest} target="_blank" rel="noreferrer" className="soc">𝕏</a>
            <a href={SELLER.youtube}   target="_blank" rel="noreferrer" className="soc">▶</a>
          </div>
        </div>

        {/* Support */}
        <div className="fc">
          <h4>Support</h4>
          <ul>
            {[['Contact Us','contact'],['Track Order','contact'],['Returns + Refunds','contact'],
              ['Shipping','contact'],['Privacy Policy','contact']].map(([l,p]) => (
              <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="fc">
          <h4>Quick Links</h4>
          <ul>
            {[['About Us','about'],['Our Stores','contact'],['Shop','shop'],
              ['B2B Trade','contact'],['Gift Cards','shop'],['The Blog','shop']].map(([l,p]) => (
              <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="fc">
          <h4>Get In Touch</h4>
          <div style={{ fontSize: 12, lineHeight: 1.9, color: 'rgba(255,255,255,.55)' }}>
            <div>📞 {SELLER.phone1}</div>
            <div>✉️ {SELLER.email}</div>
            <div style={{ marginTop: 8 }}>📍 {SELLER.address}</div>
          </div>
        </div>
      </div>

      <div className="f-bot">
        <p>© 2026 Jaya & Preeti Lifestyle  · Preeti Life Style Enterprises - Company Name 
</p>
        <p>Crafted with ♥ for beautiful homes</p>
      </div>
    </footer>
  );
}
