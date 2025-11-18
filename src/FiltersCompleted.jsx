import useFilter from "./useFilter"

export function FiltersCompleted() {
  const { finished } = useFilter()
  return (
    <>
      <h1>Finished</h1>
      <div>
        {finished.length === 0
          ? 'No hay tareas pendientes'
          : finished.map((task, index) =>
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
