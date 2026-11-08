import { useToggleTodo } from '../../hooks/useToggleTodo.js'

const SIZE_CLASSES = {
  sm: 'px-3 py-1.5 text-xs',
  lg: 'px-4 py-2.5 text-sm',
}

function ToggleStatusButton({ todo, size = 'sm', className = '' }) {
  const { mutate, isPending, isError } = useToggleTodo()

  const colorClasses = todo.completed
    ? 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
    : 'bg-sky-400 text-slate-900 hover:bg-sky-500'

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => mutate({ id: todo.id, completed: !todo.completed })}
        disabled={isPending}
        aria-pressed={todo.completed}
        className={`rounded-md font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${SIZE_CLASSES[size]} ${colorClasses}`}
      >
        {todo.completed ? '↺ Mark as pending' : '✓ Mark as done'}
      </button>
      {isError && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          Could not update. Please try again.
        </p>
      )}
    </div>
  )
}

export default ToggleStatusButton
