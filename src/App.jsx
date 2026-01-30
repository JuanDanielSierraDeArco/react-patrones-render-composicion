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
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
import { TodoEmptyResult } from "./components/ui/TodoEmptyResult";
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
      <TodoHeader loading={loading}>
        <TodoCounter
         totalTodos={totalTodos} 
         completedtodos={completedtodos} 
         loading={loading}
         />
        <TodoSearch
         searchValue={searchValue} 
         setSearchValue={setSearchValue}
         loading={loading}
         />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmtytodos={() => <TodoEmpty />}
        onEmtySearchResult={(searchText) => (
          <TodoEmptyResult searchText={searchText} />
        )}
        renderTodos={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            value={todo.text}
            onCompleted={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      ></TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}
    </div>
  );
}
export { App };
