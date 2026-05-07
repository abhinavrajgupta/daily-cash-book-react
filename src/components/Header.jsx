export default function Header({ date, onDateChange }) {
  return (
    <header className="app-header">
      <h1>Daily Cash Book</h1>
      <div className="date-display">
        <label htmlFor="today-date">Date:</label>
        <input
          type="date"
          id="today-date"
          value={date}
          onChange={e => onDateChange(e.target.value)}
        />
      </div>
    </header>
  );
}
