# 🧱 Arquitectura Base del Proyecto (Express + SQL)

Guía de organización y buenas prácticas

Este documento resume la estructura recomendada para un proyecto Express escalable.
Incluye las capas principales de tu backend y explica cómo funcionan juntas.

---

# 📂 Estructura General

```
.
├── server.js
├── app.js
├── routes/
│   └── task.routes.js
├── controllers/
│   └── task.controller.js
├── services/        (opcional)
│   └── task.service.js
├── models/          (opcional)
│   └── task.model.js
├── db/
│   ├── connection.js
│   ├── queries.js
│   └── schema.sql
└── middlewares/
```

---

# 1. `server.js`

 
Archivo principal que **inicia el servidor** y escucha peticiones.

Ejemplo:

```js
import app from './app.js'

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

---

# 2. `app.js`

Configura la **aplicación Express**:

* middlewares
* JSON parser
* CORS
* rutas principales
* manejo de errores

Ejemplo:

```js
import express from 'express'
import { taskRouter } from './routes/task.routes.js'

const app = express()

app.use(express.json())
app.use('/tasks', taskRouter)

export default app
```

---

# 3. `/routes`

Define las **rutas** del API.
Son las puertas de entrada de cada funcionalidad.

Ejemplo:

```js
import { Router } from 'express'
import {
  getTaskController,
  createTaskController,
  deleteTaskController
} from '../controllers/task.controller.js'

export const taskRouter = Router()

taskRouter.get('/', getTaskController)
taskRouter.post('/', createTaskController)
taskRouter.delete('/:id', deleteTaskController)
```

---

# 4. `/controllers`

Aquí vive la lógica que recibe la request y responde al cliente.

* Maneja `req` y `res`
* Valida entradas básicas
* Llama a services o directamente a queries
* Nunca tiene lógica compleja

Ejemplo:

```js
import { getAllTasks, createTask, deleteTask } from '../db/queries.js'
// o import { taskService } from '../services/task.service.js'

export const getTaskController = async (req, res) => {
  try {
    const tasks = await getAllTasks()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo tareas' })
  }
}
```

---

# 5. `/services` (Opcional pero recomendado)

La capa **service** contiene la **lógica de negocio**:
Reglas, transformaciones, validaciones avanzadas o combinación de consultas.

✔ Hace el código más ordenado
✔ Controladores más limpios
✔ Permite escalar sin romper tu API

Ejemplo opcional:

```js
import { getAllTasks, createTask, deleteTask } from '../db/queries.js'

export const taskService = {
  async getAll() {
    return await getAllTasks()
  },

  async create(data) {
    return await createTask(data)
  },

  async delete(id) {
    return await deleteTask({ id })
  }
}
```

---

# 6. `/models` (Opcional)

Un **modelo** define la estructura de una entidad.

Útil si:

* Creces a un ORM
* Quieres validar entidades
* Deseas objetos consistentes

Ejemplo:

```js
export class Task {
  constructor({ id, text, completed, created_at }) {
    this.id = id
    this.text = text
    this.completed = completed
    this.created_at = created_at
  }
}
```

Opcionalmente incluye validaciones:

```js
export function validateTask(body) {
  if (!body.text) {
    return { error: "El campo 'text' es requerido" }
  }
  return null
}
```

---

# 🚀 ¿Cuándo usar services y models?

| Caso                                  | ¿Usar Services? | ¿Usar Models?       |
| ------------------------------------- | --------------- | ------------------- |
| Proyecto pequeño (CRUD simple)        | Opcional        | Opcional            |
| Proyecto mediano                      | ✔ Recomendado   | Opcional            |
| Escalar a microservicios              | ✔✔ Necesario    | ✔ Recomendado       |
| Usar ORM (Prisma, Sequelize, Drizzle) | ✔               | (ORM provee models) |
| Lógica de negocio compleja            | ✔✔ Sí           | ✔ Sí                |

---

# ⭐ Beneficios de esta arquitectura

* Controladores limpios
* Mejor separación de responsabilidades
* Código más mantenible
* Facilita testing en cada capa
* Escalable para futuros módulos o entidades

---

# ¿Quieres que genere una plantilla completa para tu proyecto ya configurada?

Te puedo crear toda la estructura con archivos base, listo para copiar y pegar.
