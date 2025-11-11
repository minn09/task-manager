import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, editTask, deleteTask, toggleTask }) {
  return (
    <div>
      {tasks.length === 0
        ? (<p>No hay ninguna tarea</p>)
        : (
          tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                name="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)} />
              {task.text}
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))
        )}
    </div>
  )
}
