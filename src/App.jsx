import { CreateTodoButton } from "./CreateTodoButton"
import { TodoCounter } from "./TodoCounter"
import { TodoItem } from "./TodoItem"
import { TodoList } from "./TodoList"
import { TodoSearch } from "./TodoSearch"
import "./App.css"
import React from "react"

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

function App(){
  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedtodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  console.log("los usuarios buscan " + searchValue);

    return(
        <div className="a-container">
            <TodoCounter 
            completed={completedtodos}
            total={totalTodos}/>
            <TodoSearch
              searchValue = {searchValue}
              setSearchValue = {setSearchValue}
            />
            <TodoList>
                {defaultTodos.map(({text,completed})=>{
                    return(
                        <TodoItem
                        key={text}
                        text={text}
                        completed={completed}
                        value={text}/>
                    )
                })}
            </TodoList>
            <CreateTodoButton/>
        </div>
    )
}

export {App};