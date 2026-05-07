import EntryItem from "./EntryItem";

export default function EntryList({ entries, onEdit }) {
  if (!entries.length) {
    return <p style={{color: "#999", fontSize: "0.9rem"}}>No entries for this date.</p>;
  }
  return (
    <ul className="entries-list">
      {[...entries]
        .sort((a, b) => (a.created_at || "").localeCompare(b.created_at || ""))
        .map(entry => (
          <EntryItem key={entry.id} entry={entry} onEdit={onEdit} />
        ))}
    </ul>
  );
}
