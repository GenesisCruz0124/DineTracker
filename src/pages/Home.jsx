import HistoryList from '../components/HistoryList'
import MealForm from '../components/MealForm'
import SummaryCard from '../components/SummaryCard'
import { getMonthLabel, isSameMonth } from '../utils/format'

export default function Home({ entries, onAdd, onDelete }) {
  const monthEntries = entries.filter((entry) => isSameMonth(entry.date))
  const monthTotal = monthEntries.reduce((sum, entry) => sum + entry.amount, 0)

  return (
    <div className="space-y-5">
      <MealForm onAdd={onAdd} />

      <SummaryCard total={monthTotal} count={monthEntries.length} label={`Spent in ${getMonthLabel()}`} />

      <div>
        <h2 className="mb-3 text-lg font-semibold text-slate-100">Recent Entries</h2>
        <HistoryList entries={entries} onDelete={onDelete} limit={5} />
      </div>
    </div>
  )
}
