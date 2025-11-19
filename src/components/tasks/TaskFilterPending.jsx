import './style.css'
export function TaskFilterPending({ tasks }) {
  const pending = tasks.filter(task => !task.completed)
  const finished = tasks.filter(task => task.completed)
  return (
    <div>
      <section>
        <h1>All</h1>
        <div>
          {tasks.length === 0
            ? 'No hay tareas'
            : tasks.map((task, index) =>
            (
              <ul key={index}>
                <li>{task.text}</li>
              </ul>
            ))
          }
        </div>
      </section>
      <section>
        <h1>Pending</h1>
        <div>
          {pending.length === 0
            ? 'No hay tareas pendientes'
            : pending.map((task, index) =>
            (
              <ul key={index}>
                <li>{task.text}</li>
              </ul>
            ))
          }
        </div>
      </section>
      <section>
        <h1>Finished</h1>
        <div>
          {finished.length === 0
            ? 'No hay tareas finalizadas'
            : finished.map((task, index) =>
            (
              <ul key={index}>
                <li>{task.text}</li>
              </ul>
            ))
          }
        </div>
      </section>
    </div>
  )
}
