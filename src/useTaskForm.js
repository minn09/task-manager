import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage';

export default function useTaskForm() {
  const { getLocalStorage, setLocalStorage } = useLocalStorage()
  const [tasks, setTasks] = useState(() =>
    JSON.parse(getLocalStorage() || '[]')
  )
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null)

  // Guarda las tareas en localStorage cada vez que cambian
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const stored = getLocalStorage()
        if (stored && JSON.parse(stored).length > 0) {
          return
        }
        const data = await fetchData()
        setTasks(data)
      } catch (error) {
        console.error('Error cargando tareas:', error)
      }
    }
    loadTasks()
  }, [])

  useEffect(() => {
    setLocalStorage(tasks)
  }, [tasks])

  const fetchData = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`)
    }
    return await res.json()
  }

  const createTask = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const responseData = await response.json();

      console.log("Success:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValueTrimmed = inputValue.trim()
    if (!inputValueTrimmed) return

    if (editingIndex !== null) {
      // Edicion de una tarea
      const newTasks = tasks.map((task, index) =>
        index === editingIndex ? { ...task, text: inputValueTrimmed } : task
      )  // Cuando el índice coincide con editingIndex, reemplazar esa tarea con lo que está en el input de lo contrario mantener la tarea original sin cambios
      setInputValue('')
      setEditingIndex(null)
      setTasks(newTasks)
    } else {
      // Creacion de una tarea
      const newTasks = [...tasks, { text: inputValueTrimmed, completed: false }]
      setTasks(newTasks)
      createTask({ text: inputValueTrimmed, completed: false })
      setInputValue('')
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
    setInputValue(tasks[itemId].text)
    setEditingIndex(itemId)
  }

  const cancelTask = () => {
    setInputValue('')
    setEditingIndex(null)
  }

  const deleteTask = (itemId) => {
    const updatedTask = tasks.filter((task, index) => index !== itemId) // Quiero todas los indices que NO sean itemId
    setTasks(updatedTask)
  }

  const toggleTask = (itemId) => {
    const updatedTask = tasks.map((task, index) =>
      index === itemId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTask)
  }

  return {
    tasks, inputValue, editingIndex, handleSubmit, handleInputChange, handleKeyDown, editTask, cancelTask, deleteTask, toggleTask
  }
}
