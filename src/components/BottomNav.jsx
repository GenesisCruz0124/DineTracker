import { Home, PieChart, Receipt } from 'lucide-react'

const TABS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'history', label: 'History', icon: Receipt },
  { id: 'insights', label: 'Insights', icon: PieChart },
]

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-800 bg-slate-900/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-md grid-cols-3">
        {TABS.map((tab) => {
          const Icon = tab.icon
          const isActive = active === tab.id

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors ${
                isActive ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              {tab.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
