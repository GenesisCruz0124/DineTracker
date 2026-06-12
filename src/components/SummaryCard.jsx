import { Wallet } from 'lucide-react'
import { formatCurrency } from '../utils/format'

export default function SummaryCard({ total, count, label }) {
  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 to-slate-800/60 p-4 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="mt-1 text-3xl font-bold text-slate-50">{formatCurrency(total)}</p>
          <p className="mt-1 text-xs text-slate-500">
            {count} {count === 1 ? 'entry' : 'entries'}
          </p>
        </div>
        <div className="rounded-full bg-emerald-500/15 p-3">
          <Wallet className="text-emerald-400" size={24} />
        </div>
      </div>
    </div>
  )
}
