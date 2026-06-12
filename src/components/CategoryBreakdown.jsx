import { CATEGORIES } from '../constants/categories'
import { formatCurrency } from '../utils/format'

export default function CategoryBreakdown({ entries }) {
  const total = entries.reduce((sum, entry) => sum + entry.amount, 0)

  const breakdown = CATEGORIES.map((cat) => {
    const catTotal = entries
      .filter((entry) => entry.category === cat.value)
      .reduce((sum, entry) => sum + entry.amount, 0)

    return {
      ...cat,
      total: catTotal,
      percent: total > 0 ? (catTotal / total) * 100 : 0,
    }
  })
    .filter((cat) => cat.total > 0)
    .sort((a, b) => b.total - a.total)

  if (breakdown.length === 0) {
    return <p className="py-6 text-center text-sm text-slate-500">No spending data for this period yet.</p>
  }

  return (
    <div className="space-y-3">
      {breakdown.map((cat) => (
        <div key={cat.value}>
          <div className="mb-1 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <span className={`h-2 w-2 rounded-full ${cat.dot}`} />
              {cat.label}
            </span>
            <span className="text-sm font-semibold text-slate-100">
              {formatCurrency(cat.total)}
              <span className="ml-1.5 font-normal text-slate-500">{cat.percent.toFixed(0)}%</span>
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${cat.percent}%`, backgroundColor: cat.chart }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
