export function TaskItem({ tasks, editTask, deleteTask, toggleTask }) {
  return (
    <ul>
      {
        tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              name="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)} />
            {task.text}
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li >
        ))
      }
    </ul >
  )
}
