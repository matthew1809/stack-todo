import React, { useState } from "react"

import Stack, { Todo, Todos } from "./Stack"
import AddTodoForm from "./AddTodoForm"

import hardCodedTodos from "../utils/hardCodedTodos"

const StackContainer: React.FC = () => {
  const [showForm, updateShowForm] = useState(false)
  const [todos, updateTodos] = useState<Todos>(hardCodedTodos)

  const push = (newTodo: Todo) => {
    let newTodoWithId = { id: todos.length + 1, ...newTodo, subStack: [] }
    let newTodos = [...todos, newTodoWithId]
    updateTodos(newTodos)
    updateShowForm(!showForm)
  }

  const pop = (todos: Todos) => {
    let clone = [...todos]
    clone.pop()
    updateTodos(clone)
  }

  const PushAndPopButtons = (
    <div className='flex p-5'>
      <button
        className='block mx-auto text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => updateShowForm(!showForm)}
      >
        Push
      </button>
      {todos && todos.length > 0 && (
        <button
          className='block mx-auto text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => pop(todos)}
        >
          Pop
        </button>
      )}
    </div>
  )

  return (
    <div>
      <div className='bg-gray-200 p-4 container mx-auto'>
        <Stack todos={todos} />
      </div>
      {PushAndPopButtons}
      <div className='p-6'>
        {showForm && (
          <AddTodoForm
            push={push}
            showForm={showForm}
            updateShowForm={updateShowForm}
          />
        )}
      </div>
    </div>
  )
}

export default StackContainer
