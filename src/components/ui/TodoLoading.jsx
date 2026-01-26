import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
  return (
    <li className="tl-todoitem">
      <div className="tl-todoitem-body">
        <span className="tl-todoitem-completeicon"></span>
      </div>
      <span className="tl-todoitem-deleteicon"></span>
    </li>
  );
}

export { TodoLoading };