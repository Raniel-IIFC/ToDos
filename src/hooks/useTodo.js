import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTodoById, todoKeys } from '../api/todos.js'

export function useTodo(id) {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: ({ signal }) => fetchTodoById(id, { signal }),
    initialData: () => queryClient.getQueryData(todoKeys.all)?.find((todo) => String(todo.id) === id),
    initialDataUpdatedAt: () => queryClient.getQueryState(todoKeys.all)?.dataUpdatedAt,
    retry: (failureCount, error) => error.status !== 404 && failureCount < 1,
  })
}
