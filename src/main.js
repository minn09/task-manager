const input = document.querySelector("#input")
const form = document.getElementById("form")
const taskList = document.getElementById("task-list")
const ul = document.createElement("ul")

taskList.append(ul)
const existingTasks = document.getElementById('existing-tasks')
const MESSAGES = {
  'CONFIRM_DELETE': 'Quieres eliminar esta tarea?',
  'LOCAL_STORAGE_NAME': 'tasks',
}

let tasks = []
let existTask = ''

tasks = JSON.parse(localStorage.getItem(MESSAGES.LOCAL_STORAGE_NAME)) || []
tasks.forEach(taskText => {
  const li = createTask(taskText)
  ul.append(li)
})

existingTasks.textContent = tasks.length
const RESET_VALUE = ''

function saveTasksLocal() {
  return localStorage.setItem(MESSAGES.LOCAL_STORAGE_NAME, JSON.stringify(tasks))
}

function createElementHTML(tag, textContent = null, type = null) {
  const element = document.createElement(tag)
  if (textContent !== null) {
    element.textContent = textContent
    return element
  }
  if (type !== null) {
    element.type = type
    return element
  }
  return element
}

function createTask(taskText) {
  const li = createElementHTML("li")
  const editButton = createElementHTML('button', 'Editar')
  const deleteButton = createElementHTML('button', "Eliminar")
  const taskTextInput = createElementHTML('p', taskText)
  const checkbox = createElementHTML('input', null, 'checkbox')

  li.append(checkbox, taskTextInput, editButton, deleteButton)
  deleteButton.addEventListener('click', () => {
    const index = tasks.indexOf(taskTextInput.textContent)
    if (index > -1) {
      tasks.splice(index, 1)
    }
    let userResponse = confirm(MESSAGES.CONFIRM_DELETE)
    if (!userResponse) return
    li.remove()
    saveTasksLocal()
    existingTasks.textContent = tasks.length
  })

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      taskTextInput.classList.add('completed')
      editButton.classList.add('completed')
      deleteButton.classList.add('completed')
    } else {
      taskTextInput.classList.remove('completed')
      editButton.classList.remove('completed')
      deleteButton.classList.remove('completed')
    }
  })

  editButton.addEventListener('click', () => {
    const editInput = createElementHTML('input', taskTextInput.textContent)
    const saveButton = createElementHTML('button', 'Guardar')
    const cancelButton = createElementHTML('button', 'Cancelar')
    li.textContent = RESET_VALUE
    li.append(editInput, saveButton, cancelButton)
    editInput.value = taskTextInput.textContent
    editInput.focus()
    existingTasks.textContent = tasks.length
    saveTasksLocal()

    const handleSave = () => {
      const oldText = taskTextInput.textContent
      const newText = editInput.value
      const index = tasks.indexOf(oldText)
      if (index > -1) {
        tasks[index] = newText
      }
      taskTextInput.textContent = newText
      li.textContent = RESET_VALUE
      li.append(checkbox, taskTextInput, editButton, deleteButton)
      saveTasksLocal()
      existingTasks.textContent = tasks.length
    }

    const handleCancel = () => {
      li.textContent = RESET_VALUE
      li.append(checkbox, taskTextInput, editButton, deleteButton)
      saveTasksLocal()
      existingTasks.textContent = tasks.length
    }

    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleSave()
      }
      if (e.key === 'Escape') {
        handleCancel()
      }
    })

    cancelButton.addEventListener('click', () => handleCancel)
    saveButton.addEventListener('click', () => handleSave)
  })
  return li
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (input.value.trim() !== '') {
    const taskText = input.value.trim()
    const existThisTask = tasks.some(item => item === taskText)
    if (existThisTask) {
      alert(`Esta tarea ya existe: ${taskText}`)
      return
    }
    const li = createTask(taskText)
    input.focus()
    tasks.push(taskText)
    ul.append(li)
    saveTasksLocal()
    existingTasks.textContent = tasks.length
    input.value = RESET_VALUE
  } else {
    alert('La tarea no debe de estar vacio')
  }
})


/** NOTAS
 * Se poner `taskList.append(ul)` afuera ya que sino en cada envío, estás intentando agregar el mismo <ul> al contenedor (taskList) otra vez. Un elemento solo puede existir en un lugar una vez, si se logra agregar denuevo, no se duplica, simplemente el navegador lo mueve al final de su padre otra vez, como si reinsertara, por eso no se ve dos listas pero sí estás ejecutando una instrucción innecesaria en cada envío.
 * Se crea el elemento `const li = document.createElement("li")` dentro del evento porque cada vez que enviamos el formulario, se tiene que crear un nuevo elemento li
 */
