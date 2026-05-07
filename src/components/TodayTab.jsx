import { useState, useEffect } from "react";
import { getEntries } from "../api";
import EntryList from "./EntryList";
import Totals from "./Totals";
import EntryModal from "./EntryModal";

export default function TodayTab({ selectedDate }) {
  const [entries, setEntries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("income");
  const [editingEntry, setEditingEntry] = useState(null);

  const load = () => {
    getEntries(selectedDate).then(setEntries).catch(() => setEntries([]));
  };

  useEffect(() => { load(); }, [selectedDate]);

  const incomeTotal = entries.filter(e => e.type === "income").reduce((s, e) => s + Number(e.amount), 0);
  const expenseTotal = entries.filter(e => e.type === "expense").reduce((s, e) => s + Number(e.amount), 0);

  const openAdd = (type) => { setModalType(type); setEditingEntry(null); setModalOpen(true); };
  const openEdit = (entry) => { setModalType(entry.type); setEditingEntry(entry); setModalOpen(true); };

  return (
    <section className="tab active">
      <div className="today-actions">
        <button className="primary income" onClick={() => openAdd("income")}>Add Income</button>
        <button className="primary expense" onClick={() => openAdd("expense")}>Add Expense</button>
      </div>

      <div className="today-entries">
        <h2>Today's Entries</h2>
        <EntryList entries={entries} onEdit={openEdit} />
      </div>

      <Totals income={incomeTotal} expense={expenseTotal} />

      {modalOpen && (
        <EntryModal
          type={modalType}
          entry={editingEntry}
          defaultDate={selectedDate}
          onClose={() => setModalOpen(false)}
          onSaved={() => { setModalOpen(false); load(); }}
        />
      )}
    </section>
  );
}
