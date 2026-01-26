import "./TodoEmpty.css"
function TodoEmpty(){
  return(
    <li className="tey-todoitem">
      <span className="tey-icon">📝</span>
      <p className="tey-title">Aún no tienes tareas</p>
      <p className="tey-subtitle">Crea tu primer TODO para comenzar</p>
    </li>
  )
}

export { TodoEmpty }