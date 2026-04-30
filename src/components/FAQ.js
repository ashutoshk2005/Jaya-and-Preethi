import { useState } from 'react';

export default function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)}>
        {q}
        <span
          className="faq-plus"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
        >
          +
        </span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}
