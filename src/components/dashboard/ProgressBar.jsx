function ProgressBar({ percent }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700">Overall progress</span>
        <span className="font-semibold text-brand-600">{percent}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Overall progress"
        className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100"
      >
        <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
