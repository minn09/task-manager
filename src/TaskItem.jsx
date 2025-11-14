export function TaskItem({ tasks, editTask, deleteTask, toggleTask }) {
  return (
    <ul>
      {
        tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {console.log(task)}
            <input
              type="checkbox"
              name="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)} />
            {task.text}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li >
        ))
      }
    </ul >
  )
}
