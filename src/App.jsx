import useTask from './useTask';

export default function App() {
  const { tasks, inputValue, editingIndex, handleSubmit, handleInputChange, handleKeyDown, editTask, cancelTask, deleteTask } = useTask()

  return (
    <div>
      <h1>Task manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          value={inputValue}
          placeholder="Escribe una tarea..."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button>{editingIndex !== null ? 'Update' : 'Save'}</button>
        {editingIndex !== null && <button onClick={cancelTask}>Cancel</button>}
      </form>

      <div className="task-container">
        {tasks.length === 0
          ? (<p>No hay ninguna tarea</p>)
          : (
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={() => editTask(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
      </div>

    </div>
  )
}
