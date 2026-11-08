import { Link, useParams } from 'react-router'
import TaskDetail from '../components/tasks/TaskDetail.jsx'
import ErrorMessage from '../components/ui/ErrorMessage.jsx'
import Loader from '../components/ui/Loader.jsx'
import { useTodo } from '../hooks/useTodo.js'

function TaskDetailPage() {
  const { id } = useParams()
  const { data: todo, isPending, error, refetch } = useTodo(id)

  function renderContent() {
    if (isPending) return <Loader label="Loading task…" />
    if (todo) return <TaskDetail todo={todo} />
    if (error.status === 404) {
      return <ErrorMessage title="Task not found" message={`There is no task with ID "${id}".`} />
    }
    return <ErrorMessage title="Could not load this task" message={error.message} onRetry={refetch} />
  }

  return (
    <section className="mx-auto max-w-3xl">
      <Link to="/tasks" className="mb-6 inline-block text-sm font-medium text-brand-600 hover:underline">
        ← Back to tasks
      </Link>
      {renderContent()}
    </section>
  )
}

export default TaskDetailPage
