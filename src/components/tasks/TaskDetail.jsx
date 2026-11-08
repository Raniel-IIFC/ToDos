import StatusBadge from './StatusBadge.jsx'
import ToggleStatusButton from './ToggleStatusButton.jsx'

function TaskDetail({ todo }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <StatusBadge completed={todo.completed} />
      <h1 className="mt-4 text-2xl font-bold break-words text-slate-900 first-letter:uppercase sm:text-3xl">
        {todo.title}
      </h1>
      <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">Task ID</dt>
          <dd className="mt-1 text-lg font-semibold">#{todo.id}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">Assigned user</dt>
          <dd className="mt-1 text-lg font-semibold">User {todo.userId}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">Status</dt>
          <dd className="mt-1 text-lg font-semibold">{todo.completed ? 'Completed' : 'Pending'}</dd>
        </div>
      </dl>
      <ToggleStatusButton todo={todo} size="lg" className="mt-6 border-t border-slate-100 pt-6" />
    </article>
  )
}

export default TaskDetail
