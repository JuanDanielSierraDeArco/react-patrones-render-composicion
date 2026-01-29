import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoLoading } from "./components/ui/TodoLoading";
import { TodoError } from "./components/ui/TodoError";
import { TodoEmpty } from "./components/ui/TodoEmpty";
import { Modal } from "./components/Modal/Modal";
import { TodoForm } from "./components/TodoForm/TodoForm"
import { TodoHeader } from "./components/TodoHeader/TodoHeader"
import { useTodos } from "./hooks/useTodos";
import "./styles/App.css";

function App() {
  const {
    completeTodo,
    totalTodos,
    searchedTodos,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    completedtodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();
  return (
    <div className="a-container">
    <TodoHeader>
      <TodoCounter totalTodos={totalTodos} completedtodos={completedtodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </TodoHeader>
    <TodoList>
      {loading && !error && (
        <>
          <TodoLoading />
          <TodoLoading />
          <TodoLoading />
          <TodoLoading />
        </>
      )}
      {!loading && error && (
        <>
          <TodoError />
          <TodoError />
          <TodoError />
          <TodoError />
        </>
      )}
      {!loading && !error && totalTodos === 0 && <TodoEmpty />}
      {!loading &&
        !error &&
        totalTodos !== 0 &&
        searchedTodos.map(({ text, completed }) => {
          return (
            <TodoItem
              key={text}
              text={text}
              completed={completed}
              value={text}
              onCompleted={() => completeTodo(text)}
              onDelete={() => deleteTodo(text)}
            />
          );
        })}
    </TodoList>
    <CreateTodoButton setOpenModal={setOpenModal} />
    {openModal && (
      <Modal>
        <TodoForm 
        openModal={openModal}
        setOpenModal={setOpenModal}
        addTodo={addTodo}/>
      </Modal>
    )}
  </div>
  );
}

export { App };
