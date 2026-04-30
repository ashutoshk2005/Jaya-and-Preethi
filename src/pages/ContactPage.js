import { useState } from 'react';
import SELLER from '../config/seller';
import { FAQS } from '../data/static';
import FAQ from '../components/FAQ';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 6000);
  };

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

      <div className="contact-wrap">

        {/* ── LEFT: CONTACT INFO ──────────────────────────── */}
        <div className="ci">
          <h2>Let's Start a Conversation</h2>
          <p>
            Whether you need help choosing the right piece, want to explore
            bulk B2B options, or simply have a question — our team is ready.
          </p>

          {[
            ['📞', 'Phone',        `${SELLER.phone1}\n${SELLER.phone2}`],
            ['💬', 'WhatsApp',     SELLER.phone1],
            ['✉️', 'Email',        SELLER.email],
            ['📍', 'Address',      SELLER.address],
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

        {/* ── RIGHT: CONTACT FORM ─────────────────────────── */}
        <div className="c-form">
          <h3>Send Us a Message</h3>

          {sent && (
            <div className="f-ok">
              ✓ Your message has been sent! We'll respond within 2 hours.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="f-row">
              <div className="fg">
                <label>Full Name *</label>
                <input required value={form.name} onChange={set('name')} placeholder="Your name" />
              </div>
              <div className="fg">
                <label>Phone Number</label>
                <input value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="fg">
              <label>Email Address *</label>
              <input required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
            </div>

            <div className="fg">
              <label>Subject</label>
              <select value={form.subject} onChange={set('subject')}>
                <option value="">Select a subject</option>
                <option>Product Enquiry</option>
                <option>Order Tracking</option>
                <option>Returns &amp; Refunds</option>
                <option>B2B / Bulk Orders</option>
                <option>Store Visit</option>
                <option>Other</option>
              </select>
            </div>

            <div className="fg">
              <label>Message *</label>
              <textarea
                required
                value={form.message}
                onChange={set('message')}
                placeholder="Tell us how we can help…"
              />
            </div>

            <button type="submit" className="btn-gold" style={{ width: '100%', padding: 14 }}>
              Send Message
            </button>
          </form>
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
