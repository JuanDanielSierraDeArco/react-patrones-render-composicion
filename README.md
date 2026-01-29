# 📝 App Task – Lista de Tareas con React

Aplicación web de lista de tareas desarrollada con **React + Vite**, enfocada en aplicar buenas prácticas de desarrollo frontend como separación de responsabilidades, manejo de estado global y persistencia de datos en el navegador.

Este proyecto forma parte de mi proceso de aprendizaje en React y sirve como base para profundizar en **patrones de render y composición**.

---

## 🚀 Demo

👉 https://juandanielsierrarearco.github.io/proyecto-react-intro-app-task/

---

## 🛠️ Tecnologías utilizadas

- ⚛️ React  
- ⚡ Vite  
- 🎨 CSS Modules  
- 📦 Context API  
- 🪝 Custom Hooks  
- 💾 LocalStorage  
- 🌐 GitHub Pages  

---

## ✨ Funcionalidades

- Crear nuevas tareas  
- Marcar tareas como completadas  
- Eliminar tareas  
- Buscar tareas por nombre  
- Persistencia de datos usando LocalStorage  
- Renderizado condicional para estados:
  - Cargando  
  - Error  
  - Lista vacía  
- Uso de modal para creación de tareas  

---

## 🧠 Arquitectura y conceptos aplicados

- Separación de lógica y presentación (UI Components)
- Manejo de estado global con Context API
- Custom Hook (`useLocalStorage`) para persistencia
- Componentes reutilizables
- Organización del proyecto por responsabilidad
- Patrones de renderizado condicional

---

## 📁 Estructura del proyecto

```bash
src/
├── App.jsx
├── main.jsx
├── assets/
│   ├── icons/
│   │   ├── check.svg
│   │   └── delete.svg
│   └── images/
│       └── react.svg
├── components/
│   ├── CreateTodoButton/
│   ├── Modal/
│   ├── TodoCounter/
│   ├── TodoForm/
│   ├── TodoIcon/
│   ├── TodoItem/
│   ├── TodoList/
│   ├── TodoSearch/
│   └── ui/
├── context/
│   └── TodoContext.jsx
├── hooks/
│   └── useLocalStorage.jsx
└── styles/
    └── App.css

