import { Receipt } from 'lucide-react'
import EntryItem from './EntryItem'

export default function HistoryList({ entries, onDelete, limit, emptyMessage }) {
  const sorted = [...entries].sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date)
    return b.createdAt - a.createdAt
  })

  const list = limit ? sorted.slice(0, limit) : sorted

  if (list.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700/60 py-10 text-center text-slate-500">
        <Receipt size={36} className="mb-2 opacity-50" />
        <p className="text-sm">{emptyMessage || 'No entries yet. Log your first meal above.'}</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {list.map((entry) => (
        <EntryItem key={entry.id} entry={entry} onDelete={onDelete} />
      ))}
    </div>
  )
}
