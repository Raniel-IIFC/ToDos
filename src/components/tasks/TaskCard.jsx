import { Link } from 'react-router'
import StatusBadge from './StatusBadge.jsx'
import ToggleStatusButton from './ToggleStatusButton.jsx'

function TaskCard({ todo }) {
  return (
    <li className="relative isolate flex h-full flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-300 hover:shadow-md">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>#{todo.id}</span>
        <StatusBadge completed={todo.completed} />
      </div>
      <Link
        to={`/tasks/${todo.id}`}
        className="font-medium break-words text-slate-800 first-letter:uppercase after:absolute after:inset-0 after:rounded-lg"
      >
        {todo.title}
      </Link>
      <div className="mt-auto flex items-end justify-between gap-2">
        <p className="text-xs text-slate-500">User {todo.userId}</p>
        <ToggleStatusButton todo={todo} className="relative z-10 text-right" />
      </div>
    </li>
  )
}

export default TaskCard
