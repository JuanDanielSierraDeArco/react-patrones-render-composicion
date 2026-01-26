import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppUI } from "./components/ui/AppUI";
import React from "react";
import "./styles/App.css";

// const defaultTodos = [
//   { text: "Mi primera tarea", completed: true },
//   { text: "Comer", completed: false },
//   { text: "Dormir", completed: true },
//   { text: "Codear", completed: false },
//   { text: "Repetir", completed: true },
//   { text: "Hacer ejercicio", completed: false },
//   { text: "Leer documentación", completed: true },
//   { text: "Practicar React", completed: false },
//   { text: "Revisar commits", completed: true },
//   { text: "Descansar la vista", completed: false },
// ];
// localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos));
// localStorage.setItem("TODOS_V1",defaultTodos);
function App() {
  const {items: todos, loading, error, saveItems: saveTodos} = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedtodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchtext = searchValue.toLowerCase();
    return todoText.includes(searchtext);
  });

  // console.log("log 1");
  // // React.useEffect(()=>{
  // //   console.log("log 2");
  // // },)
  // // React.useEffect(()=>{
  // //   console.log("log 2");
  // // },[])
  // React.useEffect(()=>{
  //   console.log("looooooooooooog 2");
  // },[totalTodos])
  // console.log("log 3");


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

  return (
    <AppUI
      completedtodos={completedtodos}
      completeTodo={completeTodo}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      deleteTodo={deleteTodo}
      loading = {loading}
      error = {error}
    />
  );
}

export { App };
