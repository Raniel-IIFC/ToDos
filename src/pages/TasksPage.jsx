import { useState } from 'react'
import TaskFilters from '../components/tasks/TaskFilters.jsx'
import TaskList from '../components/tasks/TaskList.jsx'
import EmptyState from '../components/ui/EmptyState.jsx'
import ErrorMessage from '../components/ui/ErrorMessage.jsx'
import Loader from '../components/ui/Loader.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useTodos } from '../hooks/useTodos.js'
import { filterTodos } from '../utils/filterTodos.js'
import { getTaskStats } from '../utils/taskStats.js'

function TasksPage() {
  const { data: todos, isPending, isError, error, refetch } = useTodos()
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('all')

  if (isPending) return <Loader label="Loading tasks…" />
  if (isError && !todos) {
    return <ErrorMessage title="Could not load tasks" message={error.message} onRetry={refetch} />
  }

  const visibleTodos = filterTodos(todos, { searchTerm, status })
  const stats = getTaskStats(todos)
  const counts = { all: stats.total, pending: stats.pending, completed: stats.completed }

  function clearFilters() {
    setSearchTerm('')
    setStatus('all')
  }

  function renderResults() {
    if (todos.length === 0) {
      return <EmptyState title="No tasks yet" message="There are no tasks to show." />
    }
    if (visibleTodos.length === 0) {
      return (
        <EmptyState title="No matching tasks" message="Try a different search term or status filter.">
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Clear filters
          </button>
        </EmptyState>
      )
    }
    return <TaskList todos={visibleTodos} />
  }

  return (
    <section>
      <PageHeader title="Tasks" description={`Showing ${visibleTodos.length} of ${todos.length} tasks.`} />
      <TaskFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        status={status}
        onStatusChange={setStatus}
        counts={counts}
      />
      {renderResults()}
    </section>
  )
}

export default TasksPage
