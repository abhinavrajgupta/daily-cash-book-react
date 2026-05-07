import { useState } from "react";
import Header from "./components/Header";
import TodayTab from "./components/TodayTab";
import SummaryTab from "./components/SummaryTab";

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

export default function App() {
  const [activeTab, setActiveTab] = useState("today");
  const [selectedDate, setSelectedDate] = useState(todayISO());

  return (
    <div className="app-container">
      <Header date={selectedDate} onDateChange={setSelectedDate} />

      <nav className="tabs">
        <button
          className={`tab-button ${activeTab === "today" ? "active" : ""}`}
          onClick={() => setActiveTab("today")}
        >Today</button>
        <button
          className={`tab-button ${activeTab === "summary" ? "active" : ""}`}
          onClick={() => setActiveTab("summary")}
        >Summary</button>
      </nav>

      {activeTab === "today" && <TodayTab selectedDate={selectedDate} />}
      {activeTab === "summary" && <SummaryTab />}
    </div>
  );
}
