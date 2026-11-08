const ACCENT_CLASSES = {
  brand: 'text-brand-600',
  sky: 'text-sky-400',
  sun: 'text-sun-400',
  slate: 'text-slate-900',
}

function StatCard({ label, value, accent = 'slate' }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${ACCENT_CLASSES[accent]}`}>{value}</p>
    </div>
  )
}

export default StatCard
