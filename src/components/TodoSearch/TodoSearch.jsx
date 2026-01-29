import React from "react";
import "./TodoSearch.css";


function TodoSearch({searchValue, setSearchValue}){
  
  return (
    <input type="text"
    placeholder="Buscar tarea"
    className="ts-todosearch"
    value={searchValue}
    onChange={(event) =>{
      setSearchValue(event.target.value);
    }}
    />
  )
}

export {TodoSearch};