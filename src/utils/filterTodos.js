export const STATUS_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
]

function matchesStatus(todo, status) {
  if (status === 'completed') return todo.completed
  if (status === 'pending') return !todo.completed
  return true
}

export function filterTodos(todos, { searchTerm, status }) {
  const query = searchTerm.trim().toLowerCase()

  return todos.filter(
    (todo) => matchesStatus(todo, status) && todo.title.toLowerCase().includes(query),
  )
}
