# TabEats

A localized, mobile-first food spending tracker. Log meals, browse your
spending history, and see insights about where your money goes — all
stored locally in your browser via `localStorage`, no backend required.

## Features

- **Log a Meal** — quick-entry form for amount, establishment, category
  (Dine-In, Fast Food, Delivery, Cafe, Grocery), and date (defaults to
  today). The amount field uses a numeric keypad on mobile.
- **History** — full ledger of entries sorted by most recent date, with
  category badges and a delete action per entry.
- **Insights** — total spent this month, a category spending breakdown
  with percentages, and your top 3 most-visited spots.
- **Bottom navigation** for quick switching between Home, History, and
  Insights on mobile.
- **Dark, slate-themed UI** with distinct accent colors per category.
- **LocalStorage persistence** — your data stays on your device between
  sessions.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                  # Top-level layout, tab routing, entry CRUD
├── main.jsx                 # React entry point
├── index.css                # Tailwind directives + global tweaks
├── constants/
│   └── categories.js        # Category list, badge/chart colors
├── hooks/
│   └── useLocalStorage.js    # Persisted state hook
├── utils/
│   └── format.js            # Currency/date helpers
├── components/
│   ├── MealForm.jsx          # "Log a Meal" form
│   ├── CategoryBadge.jsx
│   ├── EntryItem.jsx
│   ├── HistoryList.jsx
│   ├── SummaryCard.jsx
│   ├── CategoryBreakdown.jsx
│   ├── TopSpots.jsx
│   └── BottomNav.jsx
└── pages/
    ├── Home.jsx              # Log form + monthly summary + recent entries
    ├── History.jsx           # Full ledger
    └── Insights.jsx          # Category breakdown + top spots
```
