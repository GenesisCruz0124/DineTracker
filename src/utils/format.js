export const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(amount || 0)

export const formatDate = (isoDate) => {
  const date = new Date(`${isoDate}T00:00:00`)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

// Today's date in the user's local timezone, formatted for <input type="date">.
export const todayISO = () => {
  const now = new Date()
  const offsetMs = now.getTimezoneOffset() * 60000
  return new Date(now.getTime() - offsetMs).toISOString().split('T')[0]
}

export const isSameMonth = (isoDate, reference = new Date()) => {
  const date = new Date(`${isoDate}T00:00:00`)
  return (
    date.getFullYear() === reference.getFullYear() &&
    date.getMonth() === reference.getMonth()
  )
}

export const getMonthLabel = (reference = new Date()) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(reference)
