import useFilter from "./useFilter"
export function FiltersActive() {
  const { pending } = useFilter()
  return (
    <>
      <h1>Pending</h1>
      <div>
        {pending.length === 0
          ? 'No hay tareas finalizadas'
          : pending.map((task, index) =>
          (
            <ul key={index}>
              <li>{task.text}</li>
            </ul>
          ))
        }
      </div>
    </>
  )
}
