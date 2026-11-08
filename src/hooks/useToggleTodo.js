import { useMutation, useQueryClient } from '@tanstack/react-query'
import { todoKeys, updateTodo } from '../api/todos.js'

function withCompleted(todo, id, completed) {
  return todo.id === id ? { ...todo, completed } : todo
}

export function useToggleTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, completed }) => updateTodo(id, { completed }),

    onMutate: async ({ id, completed }) => {
      await queryClient.cancelQueries({ queryKey: todoKeys.all })

      const previousList = queryClient.getQueryData(todoKeys.all)
      const previousDetail = queryClient.getQueryData(todoKeys.detail(id))

      queryClient.setQueryData(todoKeys.all, (todos) =>
        todos?.map((todo) => withCompleted(todo, id, completed)),
      )
      queryClient.setQueryData(todoKeys.detail(id), (todo) => todo && withCompleted(todo, id, completed))

      return { id, previousList, previousDetail }
    },

    onError: (_error, _variables, context) => {
      queryClient.setQueryData(todoKeys.all, context.previousList)
      queryClient.setQueryData(todoKeys.detail(context.id), context.previousDetail)
    },
  })
}
