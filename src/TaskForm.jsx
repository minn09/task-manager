export function TaskForm(
  { handleSubmit, inputValue, handleInputChange, handleKeyDown, editingIndex, cancelTask }
) {
  return (
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
  )
}
