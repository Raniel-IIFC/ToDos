import { STATUS_FILTERS } from '../../utils/filterTodos.js'

function StatusFilter({ value, onChange, counts }) {
  return (
    <div role="group" aria-label="Filter by status" className="flex w-full rounded-md bg-slate-100 p-1 sm:w-auto">
      {STATUS_FILTERS.map((option) => {
        const isActive = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={`min-h-11 flex-1 rounded px-2 text-sm font-medium whitespace-nowrap transition-colors sm:min-h-0 sm:flex-none sm:px-3 sm:py-1.5 ${
              isActive ? 'bg-white text-brand-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {option.label} <span className="text-xs text-slate-400">({counts[option.value]})</span>
          </button>
        )
      })}
    </div>
  )
}

export default StatusFilter
