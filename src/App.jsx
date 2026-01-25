import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "Mi primera tarea", completed: true },
  { text: "Comer", completed: false },
  { text: "Dormir", completed: true },
  { text: "Codear", completed: false },
  { text: "Repetir", completed: true },
  { text: "Hacer ejercicio", completed: false },
  { text: "Leer documentación", completed: true },
  { text: "Practicar React", completed: false },
  { text: "Revisar commits", completed: true },
  { text: "Descansar la vista", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedtodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchtext = searchValue.toLowerCase();
    return todoText.includes(searchtext);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const newTodos = todos.filter(todo => todo.text !== text)
    setTodos(newTodos);
  }

  return (
    <div className="a-container">
      <TodoCounter completed={completedtodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(({ text, completed }) => {
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
      <CreateTodoButton />
    </div>
  );
}

export { App };
