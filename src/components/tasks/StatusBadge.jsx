function StatusBadge({ completed }) {
  return completed ? (
    <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-slate-900">
      Completed
    </span>
  ) : (
    <span className="rounded-full bg-sun-400 px-2.5 py-0.5 text-xs font-medium text-slate-900">
      Pending
    </span>
  )
}

export default StatusBadge
