# daily-cash-book-react

A full-stack **Daily Cash Book** app — React + Vite frontend connected to a Flask + PostgreSQL backend. Track daily income/expense entries, view summaries, and manage loans.

---

## 🚀 Tech Stack

**Frontend**
- React 18 + Vite
- JavaScript (JSX)

**Backend**
- Python / Flask
- PostgreSQL (via psycopg2)
- Flask-CORS

---

## 📁 Folder Structure

```
daily-cash-book-react/
├── backend/                     # Flask API
│   ├── server.py                # Main Flask app + entries/summary routes
│   ├── loans.py                 # Loan management blueprint
│   └── requirements.txt         # Python dependencies
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Top nav / app title
│   │   ├── TodayTab.jsx         # Today's entries view
│   │   ├── EntryList.jsx        # List of all entries
│   │   ├── EntryItem.jsx        # Single entry row
│   │   ├── Totals.jsx           # Income / expense totals
│   │   ├── CategoryButtons.jsx  # Category filter buttons
│   │   ├── EntryModal.jsx       # Add / edit entry modal
│   │   └── SummaryTab.jsx       # Date range summary view
│   ├── api.js                   # Fetch helpers for Flask API
│   ├── config.js                # API base URL config
│   ├── App.jsx                  # Root component (tab layout)
│   └── main.jsx                 # React entry point
├── .gitignore
├── package.json
├── vite.config.js               # Vite config + API proxy to Flask
└── README.md
```

---

## ⚙️ Prerequisites

- **Node.js** v18+
- **npm** v9+
- **Python** 3.9+
- **PostgreSQL** database with the `entries`, `loans_given`, and `loans_to_pay` tables

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abhinavrajgupta/daily-cash-book-react.git
cd daily-cash-book-react
```

---

### 🔧 Backend Setup

#### 2. Create and activate a Python virtual environment

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Mac/Linux
# venv\Scripts\activate         # Windows
```

#### 3. Install Python dependencies

```bash
pip install -r requirements.txt
```

#### 4. Set your database URL

```bash
export DATABASE_URL="postgresql://user:password@localhost:5432/your_db"
```

> On Windows use: `set DATABASE_URL=postgresql://...`

#### 5. Run the Flask server

```bash
python server.py
```

The backend will start at **http://localhost:5000**

---

### 🌐 Frontend Setup

#### 6. Install Node dependencies (in the root folder)

```bash
cd ..         # back to project root
npm install
```

#### 7. Start the React dev server

```bash
npm run dev
```

The app will be available at **http://localhost:5173**

All `/api` requests are automatically proxied to `http://localhost:5000` via Vite.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start React development server |
| `npm run build` | Build frontend for production |
| `npm run preview` | Preview production build locally |
| `python server.py` | Start Flask backend |

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/entries?date=YYYY-MM-DD` | Get entries for a date |
| POST | `/api/entries` | Create a new entry |
| PUT | `/api/entries/<id>` | Update an entry |
| DELETE | `/api/entries/<id>` | Delete an entry |
| GET | `/api/summary?from=&to=` | Get summary for date range |
| GET | `/api/loans-given` | List all loans given |
| POST | `/api/loans-given` | Add a new loan given |
| GET | `/api/loans-to-pay` | List all loans to pay |
| POST | `/api/loans-to-pay` | Add a new loan to pay |

---

## 👤 Author

**Abhinav Raj Gupta** — [@abhinavrajgupta](https://github.com/abhinavrajgupta)
