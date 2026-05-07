import { useState } from "react";
import { createEntry, updateEntry, deleteEntry } from "../api";
import CategoryButtons from "./CategoryButtons";

export default function EntryModal({ type: initType, entry, defaultDate, onClose, onSaved }) {
  const [type, setType] = useState(initType);
  const [date, setDate] = useState(entry?.date || defaultDate);
  const [category, setCategory] = useState(entry?.category || "");
  const [amount, setAmount] = useState(entry?.amount || "");
  const [note, setNote] = useState(entry?.note || "");
  const [error, setError] = useState("");

  const isEdit = !!entry;

  const handleSave = async () => {
    if (!type || !date || !category || !amount) { setError("Please fill all required fields."); return; }
    if (Number(amount) <= 0) { setError("Amount must be positive."); return; }
    const data = { type, date, category, amount: Number(amount), note };
    if (isEdit) await updateEntry(entry.id, data);
    else await createEntry(data);
    onSaved();
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this entry?")) return;
    await deleteEntry(entry.id);
    onSaved();
  };

  const handleTypeChange = (t) => { setType(t); setCategory(""); };

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header"><h2>{isEdit ? "Edit Entry" : "Add Entry"}</h2></div>
        <div className="modal-body">
          <div className="form-row">
            <label>Type</label>
            <div className="type-toggle">
              <button type="button" data-type="income"
                className={`toggle-button ${type==="income"?"active":""}`}
                onClick={() => handleTypeChange("income")}>Income</button>
              <button type="button" data-type="expense"
                className={`toggle-button ${type==="expense"?"active":""}`}
                onClick={() => handleTypeChange("expense")}>Expense</button>
            </div>
          </div>
          <div className="form-row">
            <label>Date</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Category</label>
            <CategoryButtons type={type} selected={category} onSelect={setCategory} />
          </div>
          <div className="form-row">
            <label>Amount</label>
            <input type="number" min="0" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Description (optional)</label>
            <input type="text" maxLength={80} value={note} onChange={e => setNote(e.target.value)} />
          </div>
          {error && <p className="form-error">{error}</p>}
        </div>
        <div className="modal-footer">
          {isEdit && <button className="secondary danger" onClick={handleDelete}>Delete</button>}
          <span className="spacer" />
          <button className="secondary" onClick={onClose}>Cancel</button>
          <button className="primary" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
