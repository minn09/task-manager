import useTaskForm from './useTaskForm';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
export function HomePage() {
  const { tasks, inputValue, editingIndex, handleSubmit, handleInputChange, handleKeyDown, editTask, cancelTask, deleteTask, toggleTask } = useTaskForm()
  return (
    <>
      <TaskForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        cancelTask={cancelTask}
        inputValue={inputValue}
        editingIndex={editingIndex}
      />

      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  )
}
