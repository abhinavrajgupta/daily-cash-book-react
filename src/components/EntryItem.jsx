export default function EntryItem({ entry, onEdit }) {
  const fmt = (n) => "\u20B9" + Number(n || 0).toFixed(2);
  return (
    <li className="entry-item">
      <div className="entry-main">
        <span className="entry-category">{entry.category}</span>
        {entry.note && <span className="entry-note">{entry.note}</span>}
      </div>
      <div className="entry-meta">
        <span className={`entry-amount ${entry.type}`}>
          {entry.type === "income" ? "+" : "-"}{fmt(entry.amount)}
        </span>
        <div className="entry-actions">
          <button onClick={() => onEdit(entry)}>Edit</button>
        </div>
      </div>
    </li>
  );
}
