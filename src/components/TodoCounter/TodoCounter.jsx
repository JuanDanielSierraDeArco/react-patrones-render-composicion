import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedtodos, loading }) {
  let mensaje;

  if (totalTodos === 0) {
    mensaje = "No tienes tareas por hacer!";
  } else if (totalTodos === completedtodos) {
    mensaje = (
      <>
        <span>¡Felicidades!</span> Has completado todas tus tareas 🎉{" "}
      </>
    );
  } else {
    mensaje = (
      <>
        Has completado <span>{completedtodos}</span> de{" "}
        <span>{totalTodos}</span> tareas 📝
      </>
    );
  }

  return (
    <h1 className={`tc-todocounter ${!!loading && "tc-todocounter--loading"}`}>
      {mensaje}
    </h1>
  );
}

export { TodoCounter };
