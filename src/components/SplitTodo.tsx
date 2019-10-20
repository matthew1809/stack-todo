import React from "react"
import { useLocation } from "react-router-dom"
import AddTodoForm from "./AddTodoForm"
import Stack from "./Stack"
import hardCodedTodos from "../utils/hardCodedTodos"

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const SplitTodo = (props: any) => {
  let query = useQuery()
  const id = query.get("id")

  if (id !== null) {
    const todo = hardCodedTodos.find(el => el.id === +id)

    if (todo !== undefined) {
      return (
        <div>
          {todo.subStack && todo.subStack.length < 1 && <AddTodoForm />}
          {todo.subStack && todo.subStack.length > 0 && (
            <Stack todos={todo.subStack} />
          )}
        </div>
      )
    } else {
      return <p>Hello</p>
    }
  } else {
    return <p>GOodbye</p>
  }
}

export default SplitTodo
