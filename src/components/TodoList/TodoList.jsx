import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunc = props.children || props.renderTodos;
  return (
    <section className="tl-secctioon">
      {(!props.loading && props.error) && props.onError()}
      {(props.loading && !props.error) && props.onLoading()}
      {(!props.loading && !props.error && props.totalTodos === 0) && props.onEmtytodos()}
      {(!props.loading && !props.error && props.totalTodos !== 0) && props.searchedTodos.map(renderFunc)}
      {(!props.loading && !props.error && props.totalTodos !== 0 && props.searchedTodos.length === 0) && props.onEmtySearchResult(props.searchText)}
      <ul className="tl-todolist">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
