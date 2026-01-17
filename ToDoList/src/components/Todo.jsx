import React from 'react'

const Todo = () => {
  const tasks = localStorage.getItem("tasks") || [];

  function loadTasks (tasks){
    if(!tasks){
      
    }
  }


  return (
    <div>
      <h1>To-Do List</h1>
      <div><button>Add</button></div>
      <div>

      </div>
    </div>
  )
}

export default Todo
