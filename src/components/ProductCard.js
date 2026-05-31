import { fmt } from '../utils/format';

export default function ProductCard({ product, onSelect }) {
  return (
    <div className="p-card" onClick={() => onSelect(product)}>
      <div className="p-img">
        <img src={product.img} alt={product.name} loading="lazy" />
        {product.save && <span className="p-save">SAVE {product.save}</span>}
        <button className="p-quick">View & Buy</button>
      </div>
      <div className="p-body">
        <span className="p-mat">{product.material}</span>
        <div className="p-name">{product.name}</div>
        {/* Price section removed as per request */}
      </div>
    </div>
  );
}
