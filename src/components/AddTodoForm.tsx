import React, { useState } from "react"

const AddTodoForm = (props: any) => {
  const [name, updateName] = useState("")
  const [description, updateDescription] = useState("")

  const handleUpdateDescription = (e: any) => {
    const newDescription = e.target.value
    updateDescription(newDescription)
  }

  const handleUpdateName = (e: any) => {
    const newName = e.target.value
    updateName(newName)
  }

  return (
    <div className='mx-auto'>
      <form className='w-full max-w-sm mx-auto'>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-name'
            >
              Task Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-name'
              type='text'
              value={name}
              onChange={handleUpdateName}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-description'
            >
              Task Description
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-description'
              type='text'
              value={description}
              onChange={handleUpdateDescription}
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-1/3'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='button'
              onClick={() => props.updateShowForm(!props.showForm)}
            >
              Exit
            </button>
          </div>
          <div className='md:w-1/3'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='button'
              onClick={() =>
                props.push({ name: name, description: description })
              }
            >
              Push onto stack!
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default AddTodoForm
