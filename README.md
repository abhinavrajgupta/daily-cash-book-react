# daily-cash-book-react

A React + Vite frontend for the **Daily Cash Book** app — a full rewrite of the original vanilla JS frontend, connected to the Flask backend API.

> **Note:** This is a frontend-only repository. The Flask backend lives in a separate repo: [abhinavrajgupta/daily-cash-book](https://github.com/abhinavrajgupta/daily-cash-book)

---

## 🚀 Tech Stack

- **React 18** — component-based UI
- **Vite** — fast dev server and bundler
- **JavaScript (JSX)** — no TypeScript
- **Flask** (backend, separate repo) — REST API

---

## 📁 Folder Structure

```
daily-cash-book-react/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Top nav / app title
│   │   ├── TodayTab.jsx     # Today's entries view
│   │   ├── EntryList.jsx    # List of all entries
│   │   ├── EntryItem.jsx    # Single entry row
│   │   ├── Totals.jsx       # Income / expense totals
│   │   ├── CategoryButtons.jsx  # Category filter buttons
│   │   ├── EntryModal.jsx   # Add / edit entry modal
│   │   └── SummaryTab.jsx   # Date range summary view
│   ├── api.js               # Fetch helpers for Flask API
│   ├── config.js            # API base URL config
│   ├── App.jsx              # Root component (tab layout)
│   └── main.jsx             # React entry point
├── .gitignore
├── package.json
├── vite.config.js           # Vite config + API proxy
└── README.md
```

---

## ⚙️ Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **Flask backend** running at `http://localhost:5000` — clone and run [daily-cash-book](https://github.com/abhinavrajgupta/daily-cash-book) separately

---

## 🛠️ Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/abhinavrajgupta/daily-cash-book-react.git
cd daily-cash-book-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the React dev server

```bash
npm run dev
```

The app will be available at **http://localhost:5173**

All `/api` requests are automatically proxied to `http://localhost:5000` via Vite — make sure the Flask backend is running.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🔗 Related

- **Backend repo:** [abhinavrajgupta/daily-cash-book](https://github.com/abhinavrajgupta/daily-cash-book)

---

## 👤 Author

**Abhinav Raj Gupta** — [@abhinavrajgupta](https://github.com/abhinavrajgupta)
