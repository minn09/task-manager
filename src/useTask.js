import { useState } from 'react'

export default function useTask() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem('tasks') || '[]')
  )
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      if (editingIndex !== null) {
        // Edicion de una tarea
        const newTasks = tasks.map((task, index) =>
          index === editingIndex ? inputValue : task
        )  // Cuando el índice coincide con editingIndex, reemplazar esa tarea con lo que está en el input de lo contrario mantener la tarea original sin cambios
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        setInputValue('')
        setEditingIndex(null)
        setTasks(newTasks)
      } else {
        // Creacion de una tarea
        const newTasks = [...tasks, inputValue]
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        setInputValue('')
      }
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      cancelTask()
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const editTask = (itemId) => {
    setInputValue(tasks[itemId])
    setEditingIndex(itemId)
  }

  const cancelTask = () => {
    setInputValue('')
    setEditingIndex(null)
  }

  const deleteTask = (itemId) => {
    const updatedTask = tasks.filter((task, index) => index !== itemId) // Quiero todas los indices que NO sean itemId
    setTasks(updatedTask)
    localStorage.setItem('tasks', JSON.stringify(updatedTask))
  }

  return {
    tasks, inputValue, editingIndex, handleSubmit, handleInputChange, handleKeyDown, editTask, cancelTask, deleteTask
  }
}
