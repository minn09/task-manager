export default function useLocalStorage() {
  const getLocalStorage = () => {
    return localStorage.getItem('tasks')
  }
  const setLocalStorage = (tasks) => {
    return localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  return {
    setLocalStorage, getLocalStorage
  }
}
