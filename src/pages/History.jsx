import HistoryList from '../components/HistoryList'
import { formatCurrency } from '../utils/format'

export default function History({ entries, onDelete }) {
  const total = entries.reduce((sum, entry) => sum + entry.amount, 0)

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-bold text-slate-100">History</h1>
        <span className="text-sm text-slate-400">
          {entries.length} {entries.length === 1 ? 'entry' : 'entries'} &middot; {formatCurrency(total)}
        </span>
      </div>

      <HistoryList entries={entries} onDelete={onDelete} emptyMessage="No entries yet. Log a meal from the Home tab." />
    </div>
  )
}
