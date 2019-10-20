import React from "react"

import { Link } from "react-router-dom"

export type Todo = {
  name: string
  id: number
  description: String
  subStack: Array<Todo>
}

export type Todos = Array<Todo>

interface StackProps {
  todos: Todos
}

const Stack = (props: StackProps) => (
  <div>
    {props.todos && props.todos.length > 0 && (
      <h2 className='text-center p-5'>
        Click the task name to create or view its substack
      </h2>
    )}
    {props.todos &&
      props.todos.length > 0 &&
      props.todos.map(todo => (
        <div key={todo.name}>
          <div className='text-center px-4 py-2 my-5 flex flex-row appearance-none border-2 border-gray-200 rounded text-gray-700 outline-none bg-white border-purple-500'>
            <div className='flex-1 text-center'>
              <Link to={`/split?id=${todo.id}`}>{todo.name}</Link>
            </div>
            {todo.subStack && todo.subStack.length > 0 && <p></p>}
          </div>
        </div>
      ))}
  </div>
)

export default Stack
