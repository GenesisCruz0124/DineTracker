import { useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import BottomNav from './components/BottomNav'
import { useLocalStorage } from './hooks/useLocalStorage'
import History from './pages/History'
import Home from './pages/Home'
import Insights from './pages/Insights'

const STORAGE_KEY = 'tabeats-entries'

export default function App() {
  const [entries, setEntries] = useLocalStorage(STORAGE_KEY, [])
  const [tab, setTab] = useState('home')

  const handleAdd = (entry) => {
    setEntries((prev) => [entry, ...prev])
  }

  const handleDelete = (id) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-2.5 px-4 py-4">
          <div className="rounded-xl bg-emerald-500/15 p-2">
            <UtensilsCrossed className="text-emerald-400" size={20} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-50">TabEats</h1>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-5 pb-24">
        {tab === 'home' && <Home entries={entries} onAdd={handleAdd} onDelete={handleDelete} />}
        {tab === 'history' && <History entries={entries} onDelete={handleDelete} />}
        {tab === 'insights' && <Insights entries={entries} />}
      </main>

      <BottomNav active={tab} onChange={setTab} />
    </div>
  )
}
