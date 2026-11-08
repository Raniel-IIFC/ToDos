function EmptyState({ title, message, children }) {
  return (
    <div className="rounded-lg border-2 border-dashed border-slate-200 bg-white px-6 py-12 text-center">
      <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      {message && <p className="mt-2 text-sm text-slate-500">{message}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export default EmptyState
