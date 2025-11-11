import useTask from './useTask';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import { TaskFilter } from './TaskFilter';

export default function App() {
  const { tasks, inputValue, editingIndex, handleSubmit, handleInputChange, handleKeyDown, editTask, cancelTask, deleteTask, toggleTask } = useTask()

  return (
    <div>
      <h1>Task manager</h1>
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

      <TaskFilter
        tasks={tasks}
      />
    </div>
  )
}
