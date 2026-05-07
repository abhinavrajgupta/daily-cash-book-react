import { CATEGORY_CONFIG } from "../config";

export default function CategoryButtons({ type, selected, onSelect }) {
  const cats = CATEGORY_CONFIG[type] || [];
  return (
    <div className="category-grid">
      {cats.map(cat => (
        <button
          key={cat}
          type="button"
          className={`category-button ${selected === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >{cat}</button>
      ))}
    </div>
  );
}
