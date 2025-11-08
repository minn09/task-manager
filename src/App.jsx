import { useState, useEffect } from 'react'

export default function App() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem('tasks') || '[]')
  )
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      const newTasks = [...tasks, inputValue]
      setTasks(newTasks)
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      setInputValue('')
    }
  }

  const editTask = () => {
    console.log('Boton editar ');
  }

  const deleteTask = (itemId) => {
    const updatedTask = tasks.filter((task, index) => index !== itemId) // Quiero todas los indices que NO sean itemId
    setTasks(updatedTask)
    localStorage.setItem('tasks', JSON.stringify(updatedTask))
  }

  return (
    <div>
      <h1>Task manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Escribe una tarea..."
          onChange={handleInputChange}
        />
        <button>Create</button>
      </form>
      <p>

      </p>
      <div className="task-container">
        {tasks.length === 0
          ? (<p>No hay ninguna tarea</p>)
          : (
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={editTask}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  )
}
