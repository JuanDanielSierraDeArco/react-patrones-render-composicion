import React from "react";
import "./TodoForm.css";

function TodoForm({ openModal, setOpenModal, addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="tf-form">
      <label htmlFor="todo" className="tf-form-label">
        Escribe tu nuevo TODO
      </label>
      <textarea
        id="todo"
        className="tf-form-textarea"
        placeholder="Escribe ..."
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="tf-container">
        <button
          type="button"
          onClick={onCancel}
          className="tf-button tf-button-cancelar"
        >
          Cancelar
        </button>
        <button type="submit" className="tf-button tf-button-agregar">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
