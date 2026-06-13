import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CategoryBreakdown from '../components/CategoryBreakdown'
import SummaryCard from '../components/SummaryCard'
import TopSpots from '../components/TopSpots'
import { getMonthLabel, isSameMonth } from '../utils/format'

const startOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1)

export default function Insights({ entries }) {
  const [selectedMonth, setSelectedMonth] = useState(() => startOfMonth(new Date()))

  const monthEntries = entries.filter((entry) => isSameMonth(entry.date, selectedMonth))
  const monthTotal = monthEntries.reduce((sum, entry) => sum + entry.amount, 0)

  const now = new Date()
  const isCurrentMonth =
    selectedMonth.getFullYear() === now.getFullYear() && selectedMonth.getMonth() === now.getMonth()

  const goToPrevMonth = () =>
    setSelectedMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))

  const goToNextMonth = () =>
    setSelectedMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold text-slate-100">Insights</h1>

      <div className="flex items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-800/60 px-2 py-2">
        <button
          type="button"
          onClick={goToPrevMonth}
          aria-label="Previous month"
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-700/60 hover:text-slate-100"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm font-semibold text-slate-100">{getMonthLabel(selectedMonth)}</span>
        <button
          type="button"
          onClick={goToNextMonth}
          disabled={isCurrentMonth}
          aria-label="Next month"
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-700/60 hover:text-slate-100 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <SummaryCard total={monthTotal} count={monthEntries.length} label={`Spent in ${getMonthLabel(selectedMonth)}`} />

      <div>
        <h2 className="mb-3 text-lg font-semibold text-slate-100">By Category</h2>
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-4">
          <CategoryBreakdown entries={monthEntries} />
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-slate-100">Top Spots</h2>
        <TopSpots entries={monthEntries} />
      </div>
    </div>
  )
}
