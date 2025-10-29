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
- [] CSS básico para estilos

#### Funcionalidad Core
- [x] Crear nuevas tareas
- [x] Editar tareas
- [x] Eliminar tareas
- [x] Marcar tareas como completadas
- [ ] Listar tareas existentes
- [ ] Contador de tareas pendientes

#### Funcionalidades para mejor performance
- [ ] Mover el ul.appendChild fuera del loop
- [ ] Separar la lógica en funciones más pequeñas
- [ ] Usar nombres más descriptivos
- [ ] Agregar persistencia con localStorage
- [ ] Permitir marcar tareas como completadas
- [ ] Validación mejorada
- [ ] Prevenir edición vacía
- [ ] Focus automático en el input después de agregar
- [ ] Enter para guardar al editar / Escape para cancelar edición
- [ ] Confirmación antes de eliminar
- [ ] Evitar repetición de código
- [ ] Mejor manejo de eventos
- [ ] Constantes para textos

#### Técnicas Aprendidas
- Manipulación del DOM (`querySelector/getElementById`, `createElement`, `appendChild`)
- Event listeners (`addEventListener`)
- Manejo de arrays con métodos ES6 (`map`, `filter`, `find`)
- Template literals
- Módulos ES6 (import/export)

### 📝 Notas de Desarrollo
- Se utilizó el patrón de diseño con funciones puras
- El estado se manejó con un array simple en memoria
- Sin persistencia de datos en esta fase

---

## v2.0 - Migración a React (PRONTO)
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
