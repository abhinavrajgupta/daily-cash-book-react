export default function Totals({ income, expense }) {
  const fmt = (n) => "\u20B9" + Number(n || 0).toFixed(2);
  const net = income - expense;
  return (
    <section className="totals">
      <div className="total-item">
        <span>Income</span>
        <span style={{color: "var(--income)"}}>{fmt(income)}</span>
      </div>
      <div className="total-item">
        <span>Expenses</span>
        <span style={{color: "var(--expense)"}}>{fmt(expense)}</span>
      </div>
      <div className="total-item net">
        <span>Net</span>
        <span>{fmt(net)}</span>
      </div>
    </section>
  );
}
