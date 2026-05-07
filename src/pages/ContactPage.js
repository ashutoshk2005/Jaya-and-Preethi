import SELLER from '../config/seller';
import { FAQS } from '../data/static';
import FAQ from '../components/FAQ';

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="ph">
        <div className="ph-c">
          <div className="bc">Home / Contact</div>
          <h1>Get In Touch</h1>
          <p>Questions, collaborations, styling advice — we'd love to hear from you.</p>
        </div>
      </div>

      <div className="contact-wrap single">

        {/* ── LEFT: CONTACT INFO ──────────────────────────── */}
        <div className="ci">
          <h2>Let's Start a Conversation</h2>
          <p>
            Whether you need help choosing the right piece, want to explore
            bulk B2B options, or simply have a question — our team is ready.
          </p>

          {[
            ['📞', 'Phone',        `${SELLER.phone1}`],
            ['💬', 'WhatsApp',     SELLER.whatsapp],
            ['✉️', 'Email',        SELLER.email],
            // ['📍', 'Address',      SELLER.address],
            ['🕐', 'Working Hours',SELLER.hours],
          ].map(([ico, title, text]) => (
            <div key={title} className="cd">
              <div className="cd-ico">{ico}</div>
              <div className="cd-txt">
                <h4>{title}</h4>
                <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
              </div>
            </div>
          ))}

          {/* Quick reach buttons */}
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                fontFamily: 'var(--sans)', fontSize: '9px', letterSpacing: '3px',
                textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 12,
              }}
            >
              Reach us directly
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                className="s-wa"
                href={`https://wa.me/${SELLER.whatsapp}?text=Hi! I have a general enquiry.`}
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp Us
              </a>
              <a className="s-call" href={`tel:${SELLER.phone1}`}>📞 Call Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ SECTION ─────────────────────────────────── */}
      <div className="faq-wrap">
        <div className="sh">
          <span className="sh-eye">Quick Answers</span>
          <h2 className="sh-h">Frequently Asked</h2>
          <div className="sh-div" />
        </div>
        <div className="faq-inner">
          {FAQS.map(({ q, a }) => (
            <FAQ key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </>
  );
}
