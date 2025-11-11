export function TaskItem({ tasks, editTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            name="checkbox"
            checked={isCompleted}
            onChange={handleCheckBoxChange} />
          {task}
          <button onClick={() => editTask(index)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
