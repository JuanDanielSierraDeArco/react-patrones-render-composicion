import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(){
  const {items: todos, loading, error, saveItems: saveTodos} = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedtodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchtext = searchValue.toLowerCase();
    return todoText.includes(searchtext);
  });

  const addTodo = (texto) =>{
    const newTodo = {text: texto, completed: false}
    const newTodos = [...todos];
    newTodos.push(newTodo);
    saveTodos(newTodos);
  }


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const newTodos = todos.filter(todo => todo.text !== text)
    saveTodos(newTodos);
  }

  return {
    completedtodos,
    completeTodo,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    deleteTodo,
    loading: loading,
    error :error,
    openModal,
    setOpenModal,
    addTodo,
  };
}

export { useTodos };