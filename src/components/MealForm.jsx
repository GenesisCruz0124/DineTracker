import { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import { CATEGORIES, DEFAULT_CATEGORY } from '../constants/categories'
import { todayISO } from '../utils/format'

const EMPTY_FORM = {
  amount: '',
  name: '',
  category: DEFAULT_CATEGORY,
  date: todayISO(),
}

export default function MealForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState('')

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const parsedAmount = parseFloat(form.amount)

    if (!form.name.trim()) {
      setError('Please enter a restaurant or spot name.')
      return
    }

    if (!form.amount || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than ₱0.')
      return
    }

    if (!form.date) {
      setError('Please choose a date.')
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      amount: Math.round(parsedAmount * 100) / 100,
      name: form.name.trim(),
      category: form.category,
      date: form.date,
      createdAt: Date.now(),
    })

    setForm({ ...EMPTY_FORM, date: form.date })
    setError('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-slate-800/60 border border-slate-700/50 p-4 shadow-lg shadow-black/20"
    >
      <h2 className="text-lg font-semibold text-slate-100 mb-3">Log a Meal</h2>

      {error && (
        <div className="mb-3 rounded-lg bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="space-y-3">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-slate-400 mb-1.5">
            Amount
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 text-lg font-medium">
              ₱
            </span>
            <input
              id="amount"
              name="amount"
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={form.amount}
              onChange={updateField('amount')}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 pl-9 pr-3 py-3 text-lg font-semibold text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1.5">
            Establishment
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            placeholder="e.g. Chipotle, Local Diner"
            value={form.name}
            onChange={updateField('name')}
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3.5 py-3 text-base text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-slate-400 mb-1.5">
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={updateField('category')}
                className="w-full appearance-none rounded-xl bg-slate-900 border border-slate-700 px-3.5 py-3 pr-9 text-base text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-slate-400 mb-1.5">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={form.date}
              max={todayISO()}
              onChange={updateField('date')}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-3 text-base text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 transition-colors py-3.5 text-base font-semibold text-slate-950 shadow-md shadow-emerald-500/20"
        >
          <Plus size={20} strokeWidth={2.5} />
          Add Entry
        </button>
      </div>
    </form>
  )
}
