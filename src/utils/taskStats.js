export function getTaskStats(todos) {
  const total = todos.length
  const completed = todos.filter((todo) => todo.completed).length
  const pending = total - completed
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100)

  return { total, completed, pending, completionRate }
}
