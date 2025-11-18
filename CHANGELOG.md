# Changelog y Features

Registro detallado de todos los cambios, características y mejoras implementadas en cada versión del proyecto.

---

## 📋 Índice de Versiones

- [v1.0 - Fundamentos con Vanilla JS](#v10---fundamentos-con-vanilla-js)
- [v2.0 - Migración a React](#v20---migración-a-react)
- [v3.0 - Nivel Medio](#v30---nivel-medio)
- [v4.0 - Nivel Intermedio-Avanzado](#v40---nivel-intermedio-avanzado)
- [v5.0 - Backend Fundamentos (Node.js Vanilla)](#v50---backend-fundamentos-nodejs-vanilla)
- [v6.0 - Backend con Express](#v60---backend-con-express)
- [v7.0 - Backend con Base de Datos](#v70---backend-con-base-de-datos)

---

## v1.0 - Fundamentos con Vanilla JS

### 🎯 Objetivos de la Fase
Establecer las bases del proyecto con JavaScript vanilla y entender los fundamentos del DOM.

### ✅ Características Implementadas
> NOTA: Se Creo un nuevo proyecto con Vite (build tool y dev server) ejecutando `npm create vite@latest` y seleccionando el template vanilla JavaScript

#### Setup Inicial
- [x] Configuración de Vite
- [x] HTML semántico
- [x] CSS básico para estilos

#### Funcionalidad Core
- [x] Crear nuevas tareas
- [x] Editar tareas
- [x] Eliminar tareas
- [x] Marcar tareas como completadas
- [x] Listar tareas existentes
- [x] Contador de tareas pendientes

#### Funcionalidades para mejor performance
- Refactor a módulos
  - [x] Mover el ul.appendChild fuera del loop
  - [x] Separar la lógica en funciones más pequeñas (una función por responsabilidad)
  - [x] Evitar repetición de código (crear funciones helper reutilizables)

- localStorage + validaciones
  - [x] Agregar persistencia con localStorage

- Mejoras UX (Enter/Escape/Focus)
  - [x] Focus automático en el input después de agregar
  - [x] Validación mejorada (usar `.trim()` para evitar espacios vacíos)
  - [x] Prevenir edición vacía (validar antes de guardar)
  - [x] Permitir marcar tareas como completadas (checkbox funcional con estilo)
  - [x] Permitir saber si la tarea ya existe
- OPCIONALES
- [x] Usar nombres más descriptivos (`numberTask` → `taskCount`)
- [x] Constantes para textos (crear objeto MESSAGES)
- [x] Confirmación antes de eliminar (usar `confirm()`)
- [x] Enter para guardar al editar / Escape para cancelar edición
- [x] Mejor manejo de eventos (separar event listeners en funciones)

#### Técnicas Aprendidas
- Manipulación del DOM (`querySelector/getElementById`, `createElement`, `appendChild`)
- Event listeners (`addEventListener`)
- Manejo de arrays con métodos ES6 (`map`, `filter`, `find`)
- Template literals
- Módulos ES6 (import/export)

---

## v2.0 - Migración a React
### 🎯 Objetivos de la Fase
Refactorizar la aplicación a React para mejorar la organización del código y preparar el terreno para características más complejas.

### 📦 Migracion minima de React (OPCIONAL)
> Nota: Esta sección es opcional y documenta cómo migrar un proyecto Vite vanilla a React.
1.  Instalar el plugin oficial de Vite para React `npm install @vitejs/plugin-react -E`
  1.1. La version plugin-react, usa esbuild and Babel. `https://vite.dev/plugins/#vitejs-plugin-react`, mientras que la version swc, remplaza babel por SWC
  y en la build usa SWC mas esbuild `https://vite.dev/plugins/#vitejs-plugin-react-swc`
2.  Instalar las dependencias core de React `npm install react react-dom -E`
3.  Crear y configurar el archivo de configuración de Vite (`vite.config.js`) con el plugin de React
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

4. Configurar el punto de entrada de la aplicación (`main.jsx`) con ReactDOM
```js
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("app"));
root.render(<h1>Hola Mundo</h1>);
```

5. Instalar ESlint `npm init @eslint/config@latest`
6. Instalar Prettier para ESlint `npm install -D -E eslint-config-prettier`
```js
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  pluginReact.configs.flat.recommended, // Primero importas la config recomendada de React
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Y luego sobreescribes lo que quieras
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintConfigPrettier,
]);
```

### ✅ Características Implementadas

#### Arquitectura React
- [x] Conversión a componentes React
- [x] Separación de responsabilidades por componentes
- [x] Uso de JSX para el renderizado
- [x] Props para comunicación entre componentes

#### Componentes Creados
- [x] `App` - Componente principal
- [x] `TaskList` - Lista de tareas
- [x] `TaskItem` - Item individual de tarea
- [x] `TaskForm` - Formulario para agregar tareas
- [x] `TaskFilter` - Filtros de visualización

#### Hooks Implementados
- [x] `useState` - Manejo de estado local
- [x] `useEffect` - Efectos secundarios

#### Funcionalidades Mejoradas
- [x] Re-renderizado eficiente
- [x] Filtrado de tareas (Todas / Activas / Completadas)
- [x] Validación básica de formularios
- [x] Interfaz más reactiva
---

## v3.0 - Nivel Medio

### 🎯 Objetivos de la Fase
Expandir funcionalidad y mejorar la arquitectura de componentes.

#### Routing basico
- [x] window.location.pathname (MPA -> Multi Page Aplication)
- [x] Rutas:
  - [x] `/`          - Home con todas las tareas
  - [x] `/active`    - Tareas activas
  - [x] `/completed` - Tareas completadas

#### Primeros customs hooks
- [x] `useTaskForm` - Hook para el formulario
- [x] `useLocalStorage` - Hook para persistencia
- [x] `useFilter` - Hook para filtros

---

## v4.0 - Nivel Intermedio-Avanzado

### 🎯 Objetivos de la Fase
Implementar una mejor forma de crear tareas.

#### Nuevas Features
- [x] Modal para crear/editar tareas

## v5.0 - Backend Fundamentos (Node.js Vanilla)

### 🎯 Objetivos de la Fase
Construir un servidor HTTP básico con Node.js puro y entender los fundamentos del backend.

### ✅ Características a Implementar

#### Setup Inicial
- [x] Inicializar proyecto Node.js (`npm init`)
- [x] Crear estructura de carpetas básica
  ```
  backend/
  ├── server.js
  ├── data/
  │   └── tasks.json
  └── package.json
  ```
- [x] Configurar scripts en package.json (`start`, `dev`)

#### Servidor HTTP Básico
- [x] Crear servidor con módulo `http` de Node.js
- [x] Configurar puerto y hostname
- [x] Implementar manejo básico de rutas
- [x] Parsear body de requests manualmente

#### API REST con Node Vanilla
- [x] `GET /tasks` - Obtener todas las tareas
- [x] `POST /tasks` - Crear nueva tarea

#### Funcionalidades Core
- [x] Generar IDs únicos (UUID o timestamp)
- [x] Códigos de estado HTTP apropiados (200, 201, 404, 500)

### 🔄 Migración del Frontend
- [x] Reemplazar `localStorage` con `fetch` al backend
- [x] Implementar error handling en el frontend
---

## v6.0 - Backend con Express

### 🎯 Objetivos de la Fase
Refactorizar el servidor a Express para simplificar el código y agregar middleware.

### 📦 Migración a Express

#### Setup de Express
- [ ] Instalar Express `npm install express -E`
- [ ] Usar `node --watch index.js` para correr el servidor
- [ ] Instalar cors `npm install cors -E` o hacerlo manual

#### Refactorización del Servidor
- [ ] Migrar servidor HTTP a Express
- [ ] Implementar middleware de Express
  - [ ] `express.json()` para parsear body entenderlo y hacerlo a mano
  - [ ] `cors()` para CORS, primero hacerlo a mano
  - [ ] Middleware custom de logging
- [ ] Organizar rutas con Express Router
- [ ] Separar rutas en archivos dedicados

#### Arquitectura Mejorada
```
backend/
├── src/
│   ├── server.js
│   ├── app.js
│   ├── routes/
│   │   └── tasks.routes.js
│   ├── controllers/
│   │   └── tasks.controller.js
│   ├── services/
│   │   └── tasks.service.js
│   └── data/
│       └── tasks.json
├── package.json
└── .env
```

#### Features de Express
- [ ] Router modular para tareas
- [ ] Middleware de validación
- [ ] Middleware de error handling
- [ ] Variables de entorno con `dotenv`
- [ ] Separación en capas (routes → controllers → services)

#### Validación y Seguridad Básica
- [ ] Validación de inputs mejorada
- [ ] Helmet.js para headers de seguridad
- [ ] Rate limiting básico
- [ ] Sanitización de datos

### ✅ Características Implementadas

#### API REST Mejorada
- [ ] Rutas organizadas con Express Router
- [ ] Controllers para lógica de negocio
- [ ] Services para operaciones de datos
- [ ] Middleware chain bien estructurado

#### Error Handling
- [ ] Middleware de manejo de errores centralizado
- [ ] Errores personalizados con status codes
- [ ] Logging de errores estructurado

---

## v7.0 - Backend con Base de Datos

### 🎯 Objetivos de la Fase
Migrar de JSON file system a una base de datos real.

### 📦 Setup de Base de Datos

#### Instalación
- [ ] Instalar PostgreSQL localmente
- [ ] Crear base de datos: `createdb todo_app`
- [ ] Instalar driver `npm install pg -E`
- [ ] Instalar tipos `npm install -D @types/pg -E`
- [ ] Crear `.env` con `DATABASE_URL=postgresql://user:pass@localhost:5432/todo_app`

#### Schema SQL
- [ ] Crear `db/schema.sql`
```sql
  CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
```
- [ ] Ejecutar: `psql -U postgres -d todo_app -f db/schema.sql`

#### Configuración del Pool
- [ ] Crear `db/connection.js`
```typescript
  import { Pool } from 'pg'
  export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  })
```

#### Queries SQL
- [ ] Crear `db/queries.ts` con operaciones CRUD
```typescript
  export const queries = {
    getAll: () => pool.query('SELECT * FROM tasks ORDER BY created_at DESC'),
    create: (text: string) => pool.query('INSERT INTO tasks (text) VALUES ($1) RETURNING *', [text]),
    update: (id: number, text: string, completed: boolean) =>
      pool.query('UPDATE tasks SET text = $1, completed = $2 WHERE id = $3 RETURNING *', [text, completed, id]),
    delete: (id: number) => pool.query('DELETE FROM tasks WHERE id = $1', [id])
  }
```

#### Migración
- [ ] Reemplazar operaciones `fs` con `queries` en el service layer
- [ ] Mantener la misma API (sin breaking changes)

### 📁 Estructura Final
```
backend/
├── src/
│   ├── db/
│   │   ├── connection.js     # Pool
│   │   ├── schema.sql        # Schema
│   │   └── queries.js        # CRUD queries
│   ├── services/
│   │   └── tasks.service.js  # Usa queries
│   └── ...
└── .env
```

### 🎯 Scripts Útiles
```json
{
  "scripts": {
    "db:setup": "psql -U postgres -d todo_app -f src/db/schema.sql"
  }
}
```
