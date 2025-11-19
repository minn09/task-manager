import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, editTask, deleteTask, toggleTask }) {
  return (
    <div>
      {tasks.length === 0
        ? (<p>No hay ninguna tarea</p>)
        : (
          <TaskItem
            tasks={tasks}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTask={toggleTask} />

        )}
    </div>
  )
}
