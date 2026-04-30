import IMAGES from '../config/images';
import { TESTIMONIALS } from '../data/static';

export default function AboutPage({ navigate }) {
  return (
    <>
      {/* Page Hero */}
      <div className="ph">
        <div className="ph-c">
          <div className="bc">Home / About</div>
          <h1>Our Story</h1>
          <p>Twelve years of crafting beauty, one piece at a time.</p>
        </div>
      </div>

      {/* ── BRAND STORY SPLIT ───────────────────────────── */}
      <div className="ab-split">
        <div className="ab-img">
          <img src={IMAGES.aboutMain} alt="TheDecorKart Atelier" />
        </div>
        <div className="ab-txt">
          <h2>Heritage Craftsmanship,<br />Modern Sensibility</h2>
          <p>
            Founded over a decade ago, TheDecorKart was born from a deep love
            of handcrafted objects and the belief that every home deserves to
            feel like a curated gallery — personal, layered, and alive with stories.
          </p>
          <p>
            We source our pieces from master artisans across India and beyond,
            working with centuries-old techniques in ceramics, resin, glass, and
            metalwork. Each piece carries the mark of the hand that made it.
          </p>
          <p>
            Today, with over 1 lakh+ patrons and a growing international presence,
            we continue our mission: to make extraordinary decor accessible, and to
            remind every customer that living beautifully is a choice — not a luxury.
          </p>
          <button
            className="btn-gold"
            style={{ marginTop: 8 }}
            onClick={() => navigate('shop')}
          >
            Explore Our Collection
          </button>
        </div>
      </div>

      {/* ── STATS ROW ───────────────────────────────────── */}
      <div className="stats">
        {[
          ['12+',  'Years of Excellence'],
          ['1L+',  'Happy Patrons'],
          ['5000+','Unique Pieces'],
        ].map(([n, l]) => (
          <div key={l} className="stat">
            <span className="stat-n">{n}</span>
            <span className="stat-l">{l}</span>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="testi">
        <div className="sh">
          <span className="sh-eye">What They Say</span>
          <h2 className="sh-h">Loved by Many</h2>
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
    </>
  );
}
