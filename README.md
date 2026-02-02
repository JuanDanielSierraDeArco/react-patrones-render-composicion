# 📝 App Task – Lista de Tareas con React

Aplicación web de lista de tareas v2 desarrollada con React + Vite, enfocada en la aplicación práctica de patrones de render y composición, buenas prácticas de arquitectura frontend y manejo de estado compartido.

Este proyecto forma parte de mi proceso de aprendizaje en React, aplicando conceptos avanzados como Render Props, Higher-Order Components (HOC), composición de componentes y separación clara entre lógica y presentación.
---

## 🚀 Demo

👉 https://juandanielsierradearco.github.io/react-patrones-render-composicion/
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
- 🔄 Sincronización entre pestañas
---
---

## 🧠 Patrones de Render y Composición

Este proyecto implementa patrones avanzados de React para mejorar la organización del código:

### 🔹 Render Props
Permite definir dinámicamente cómo se renderiza un componente, aumentando la flexibilidad.

### 🔹 Higher-Order Components (HOC)
Se utiliza para manejar la sincronización con `localStorage`, separando la lógica del renderizado.

### 🔹 Composición de Componentes
Uso de componentes pequeños y reutilizables que se combinan para crear interfaces más complejas.

### 🔹 Separación de responsabilidades
La lógica de negocio se mantiene separada de la UI, facilitando el mantenimiento y la escalabilidad.

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
│ ├── icons/
│ └── images/
├── components/
│ ├── ChangeAlert/
│ ├── CreateTodoButton/
│ ├── Modal/
│ ├── TodoCounter/
│ ├── TodoForm/
│ ├── TodoHeader/
│ ├── TodoIcon/
│ ├── TodoItem/
│ ├── TodoList/
│ ├── TodoSearch/
│ └── ui/
├── context/
├── hooks/
│ ├── useLocalStorage.jsx
│ └── useTodos.jsx
└── styles/

👨‍💻 Autor
Juan Daniel Sierra De Arco
GitHub: https://github.com/JuanDanielSierraDeArco
LinkedIn: https://linkedin.com/in/juan-daniel-sierra-de-arco