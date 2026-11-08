function SearchInput({ value, onChange }) {
  return (
    <div className="w-full sm:max-w-xs">
      <label htmlFor="task-search" className="sr-only">
        Search tasks
      </label>
      <input
        id="task-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search tasks by title…"
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-300 focus:outline-none"
      />
    </div>
  )
}

export default SearchInput
