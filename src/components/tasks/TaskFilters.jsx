import SearchInput from './SearchInput.jsx'
import StatusFilter from './StatusFilter.jsx'

function TaskFilters({ searchTerm, onSearchChange, status, onStatusChange, counts }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <SearchInput value={searchTerm} onChange={onSearchChange} />
      <StatusFilter value={status} onChange={onStatusChange} counts={counts} />
    </div>
  )
}

export default TaskFilters
