import { useState, useEffect } from "react";
import { getSummary } from "../api";

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
const fmt = (n) => "\u20B9" + Number(n || 0).toFixed(2);

export default function SummaryTab() {
  const today = todayISO();
  const [from, setFrom] = useState(today);
  const [to, setTo] = useState(today);
  const [data, setData] = useState(null);

  const load = () => getSummary(from, to).then(setData);
  useEffect(() => { load(); }, []);

  return (
    <section className="tab active">
      <div className="summary-filters">
        <h2>Summary</h2>
        <div className="filter-row">
          <label>From</label>
          <input type="date" value={from} onChange={e => setFrom(e.target.value)} />
        </div>
        <div className="filter-row">
          <label>To</label>
          <input type="date" value={to} onChange={e => setTo(e.target.value)} />
        </div>
        <button className="primary" onClick={load}>Show Summary</button>
      </div>

      {data && (
        <>
          <div className="summary-totals">
            <div className="total-item"><span>Total Income</span><span style={{color:"var(--income)"}}>{fmt(data.income_total)}</span></div>
            <div className="total-item"><span>Total Expenses</span><span style={{color:"var(--expense)"}}>{fmt(data.expense_total)}</span></div>
            <div className="total-item net"><span>Net</span><span>{fmt(data.net)}</span></div>
          </div>
          <div className="summary-by-category today-entries">
            <h3>By Category</h3>
            <ul className="entries-list">
              {data.by_category.map(row => (
                <li key={row.category} className="entry-item">
                  <div className="entry-main">
                    <span className="entry-category">{row.category}</span>
                    <span className="entry-note">Income: {fmt(row.income_total)} • Expense: {fmt(row.expense_total)}</span>
                  </div>
                  <span className="entry-amount">{fmt(row.income_total - row.expense_total)}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
