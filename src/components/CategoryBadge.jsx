import { getCategory } from '../constants/categories'

export default function CategoryBadge({ category }) {
  const cat = getCategory(category)

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${cat.badge}`}
    >
      {cat.label}
    </span>
  )
}
