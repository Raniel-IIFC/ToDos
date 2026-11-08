import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'
import { fetchTodos, todoKeys } from '../api/todos.js'

const selectNoTodos = () => []

export function useTodos() {
  const [searchParams] = useSearchParams()
  const simulateEmpty = searchParams.get('demo') === 'empty'

  return useQuery({
    queryKey: todoKeys.all,
    queryFn: ({ signal }) => fetchTodos({ signal }),
    select: simulateEmpty ? selectNoTodos : undefined,
  })
}
