const input = document.querySelector("#input")
const form = document.getElementById("#form")
const button = document.getElementById("#new-task")
const taskList = document.getElementById("#task-list")
const ul = document.createElement("ul")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (input.value !== '') {
    const li = document.createElement("li")
    const editButton = document.createElement("button")
    const deleteButton = document.createElement("button")
    const taskText = document.createElement('p', 'task-text')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    editButton.textContent = 'Editar'
    deleteButton.textContent = 'Eliminar'
    taskText.textContent = input.value
    li.appendChild(checkbox)
    li.appendChild(taskText)
    li.appendChild(editButton)
    li.appendChild(deleteButton)
    ul.appendChild(li)
    input.value = ''

    deleteButton.addEventListener('click', () => {
      li.remove()
    })

    editButton.addEventListener('click', () => {

      const editInput = document.createElement('input')
      const saveButton = document.createElement('button')
      const cancelButton = document.createElement('button')

      saveButton.textContent = "Save"
      cancelButton.textContent = "Cancel"

      editInput.value = taskText.textContent
      li.textContent = ''
      li.appendChild(editInput)
      li.appendChild(saveButton)
      li.appendChild(cancelButton)

      cancelButton.addEventListener('click', () => {
        li.innerHTML = ''
        li.appendChild(taskText)
        li.appendChild(editButton)
        li.appendChild(deleteButton)
      })

      saveButton.addEventListener('click', () => {
        li.innerHTML = ''
        taskText.textContent = editInput.value
        li.appendChild(taskText)
        li.appendChild(editButton)
        li.appendChild(deleteButton)
      })
    })
  } else {
    alert('La tarea debe de tener algo de texto')
  }
  taskList.append(ul)
})


/** NOTAS
 * Se poner `taskList.append(ul)` afuera ya que sino en cada envío, estás intentando agregar el mismo <ul> al contenedor (taskList) otra vez. Un elemento solo puede existir en un lugar una vez, si se logra agregar denuevo, no se duplica, simplemente el navegador lo mueve al final de su padre otra vez, como si reinsertara, por eso no se ve dos listas pero sí estás ejecutando una instrucción innecesaria en cada envío.
 * Se crea el elemento `const li = document.createElement("li")` dentro del evento porque cada vez que enviamos el formulario, se tiene que crear un nuevo elemento li
 */
