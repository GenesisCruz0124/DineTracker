import { Trophy } from 'lucide-react'
import { formatCurrency } from '../utils/format'

const MEDAL_STYLES = [
  'bg-amber-400/15 text-amber-400',
  'bg-slate-300/15 text-slate-300',
  'bg-orange-400/15 text-orange-400',
]

export default function TopSpots({ entries }) {
  const grouped = entries.reduce((acc, entry) => {
    const key = entry.name.trim().toLowerCase()
    if (!acc[key]) {
      acc[key] = { name: entry.name.trim(), visits: 0, total: 0 }
    }
    acc[key].visits += 1
    acc[key].total += entry.amount
    return acc
  }, {})

  const top = Object.values(grouped)
    .sort((a, b) => b.visits - a.visits || b.total - a.total)
    .slice(0, 3)

  if (top.length === 0) {
    return <p className="py-6 text-center text-sm text-slate-500">No spots logged yet.</p>
  }

  return (
    <div className="space-y-2">
      {top.map((spot, index) => (
        <div
          key={spot.name}
          className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/60 px-4 py-3"
        >
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${MEDAL_STYLES[index]}`}>
            <Trophy size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-medium text-slate-100">{spot.name}</p>
            <p className="text-xs text-slate-500">
              {spot.visits} {spot.visits === 1 ? 'visit' : 'visits'}
            </p>
          </div>
          <span className="text-sm font-semibold text-slate-200">{formatCurrency(spot.total)}</span>
        </div>
      ))}
    </div>
  )
}
