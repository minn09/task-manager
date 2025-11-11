# Changelog y Features

Registro detallado de todos los cambios, características y mejoras implementadas en cada versión del proyecto.

---

## 📋 Índice de Versiones

- [v1.0 - Fundamentos con Vanilla JS](#v10---fundamentos-con-vanilla-js)
- [v2.0 - Migración a React](#v20---migración-a-react)
- [v3.0 - Nivel Medio](#v30---nivel-medio-en-progreso)
- [v4.0 - Nivel Avanzado](#v40---nivel-avanzado-planificado)

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
- [ ] Props para comunicación entre componentes

#### Componentes Creados
- [x] `App` - Componente principal
- [ ] `TaskList` - Lista de tareas
- [ ] `TaskItem` - Item individual de tarea
- [ ] `TaskForm` - Formulario para agregar tareas
- [ ] `TaskFilter` - Filtros de visualización

#### Hooks Implementados
- [x] `useState` - Manejo de estado local
- [ ] `useEffect` - Efectos secundarios

#### Funcionalidades Mejoradas
- [ ] Re-renderizado eficiente
- [ ] Filtrado de tareas (Todas / Activas / Completadas)
- [x] Validación básica de formularios
- [ ] Interfaz más reactiva
---

## v3.0 - Nivel Medio (PRONTO)
---

## v4.0 - Nivel Avanzado (PRONTO)
---

## 🎨 Features de UI/UX Planeadas

### Diseño Visual
- [ ] Sistema de diseño consistente
- [ ] Responsive design para todos los dispositivos
- [ ] Microinteracciones
- [ ] Skeleton loaders
- [ ] Smooth scrolling
- [ ] Glassmorphism effects

### Experiencia de Usuario
- [ ] Onboarding para nuevos usuarios
- [ ] Tour guiado
- [ ] Tooltips informativos
- [ ] Undo/Redo functionality
- [ ] Bulk actions (selección múltiple)
- [ ] Quick actions menu
