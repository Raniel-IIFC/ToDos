const BASE_URL = 'https://jsonplaceholder.typicode.com'

class HttpError extends Error {
  constructor(status) {
    super(`Request failed with status ${status}`)
    this.name = 'HttpError'
    this.status = status
  }
}

async function request(path, { signal, method = 'GET', body } = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    signal,
    headers: body ? { 'Content-Type': 'application/json; charset=UTF-8' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!response.ok) {
    throw new HttpError(response.status)
  }
  return response.json()
}

export const todoKeys = {
  all: ['todos'],
  detail: (id) => ['todos', String(id)],
}

export function fetchTodos({ signal } = {}) {
  return request('/todos', { signal })
}

export function fetchTodoById(id, { signal } = {}) {
  return request(`/todos/${id}`, { signal })
}

export function updateTodo(id, changes) {
  return request(`/todos/${id}`, { method: 'PATCH', body: changes })
}
