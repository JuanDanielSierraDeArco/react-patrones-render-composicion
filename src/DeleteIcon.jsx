import React from "react";
import { TodoIcon } from "./TodoIcon";

function DeleteIcon({onDelete}){
  return(
    <TodoIcon
    type="delete"
    color = "#6b6b6b"
    onClick={onDelete}
    />
  );
}

export {DeleteIcon};