import TaskCard from './TaskCard.jsx'

function TaskList({ todos }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <TaskCard key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TaskList
