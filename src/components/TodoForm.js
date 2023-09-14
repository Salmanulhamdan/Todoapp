import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("")
  const handlesubmit = e =>{
    e.preventDefault();
    addTodo(value)
    setValue("")
  }
  return (
    <form className='TodoForm'onSubmit={handlesubmit}>
      <input type='text' className='todo-input' value={value}
      placeholder='Today Tasks' onChange={(e) => setValue(e.target.value)}/>

      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

