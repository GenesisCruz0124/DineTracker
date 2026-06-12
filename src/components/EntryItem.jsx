import { Trash2 } from 'lucide-react'
import CategoryBadge from './CategoryBadge'
import { formatCurrency, formatDate } from '../utils/format'

export default function EntryItem({ entry, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-800/60 border border-slate-700/50 px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-slate-100 truncate">{entry.name}</p>
        <div className="mt-1 flex items-center gap-2">
          <CategoryBadge category={entry.category} />
          <span className="text-xs text-slate-500">{formatDate(entry.date)}</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <span className="text-lg font-semibold text-slate-100">{formatCurrency(entry.amount)}</span>
        <button
          type="button"
          onClick={() => onDelete(entry.id)}
          aria-label={`Delete entry for ${entry.name}`}
          className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-red-500/10 hover:text-red-400 active:bg-red-500/20"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}
