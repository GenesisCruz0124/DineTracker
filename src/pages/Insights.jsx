import CategoryBreakdown from '../components/CategoryBreakdown'
import SummaryCard from '../components/SummaryCard'
import TopSpots from '../components/TopSpots'
import { getMonthLabel, isSameMonth } from '../utils/format'

export default function Insights({ entries }) {
  const monthEntries = entries.filter((entry) => isSameMonth(entry.date))
  const monthTotal = monthEntries.reduce((sum, entry) => sum + entry.amount, 0)

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold text-slate-100">Insights</h1>

      <SummaryCard total={monthTotal} count={monthEntries.length} label={`Spent in ${getMonthLabel()}`} />

      <div>
        <h2 className="mb-3 text-lg font-semibold text-slate-100">By Category</h2>
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-4">
          <CategoryBreakdown entries={monthEntries} />
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-slate-100">Top Spots</h2>
        <TopSpots entries={entries} />
      </div>
    </div>
  )
}
