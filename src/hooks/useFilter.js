import useTaskForm from './useTaskForm';

export default function useFilter() {
  const { tasks } = useTaskForm()
  const pending = tasks.filter(task => !task.completed)
  const finished = tasks.filter(task => task.completed)
  return {
    pending, finished
  }
}
