// Category metadata: dropdown labels, badge styling, and chart colors.
export const CATEGORIES = [
  {
    value: 'Dine-In',
    label: 'Dine-In',
    badge: 'bg-violet-500/15 text-violet-300 border border-violet-500/30',
    dot: 'bg-violet-400',
    chart: '#a78bfa',
  },
  {
    value: 'Fast Food',
    label: 'Fast Food',
    badge: 'bg-orange-500/15 text-orange-300 border border-orange-500/30',
    dot: 'bg-orange-400',
    chart: '#fb923c',
  },
  {
    value: 'Delivery',
    label: 'Delivery',
    badge: 'bg-sky-500/15 text-sky-300 border border-sky-500/30',
    dot: 'bg-sky-400',
    chart: '#38bdf8',
  },
  {
    value: 'Cafe',
    label: 'Cafe',
    badge: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    dot: 'bg-amber-400',
    chart: '#fbbf24',
  },
  {
    value: 'Grocery',
    label: 'Grocery',
    badge: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    dot: 'bg-emerald-400',
    chart: '#34d399',
  },
]

export const DEFAULT_CATEGORY = CATEGORIES[0].value

export const getCategory = (value) =>
  CATEGORIES.find((category) => category.value === value) || CATEGORIES[0]
