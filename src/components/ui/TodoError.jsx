import "./TodoError.css";
function TodoError(){
  return(
    <li className="te-todoitem">
      <p className="te-message">! Ocurrió un error al cargar los TODOs</p>
      <span className="te-icon">⚠️</span>
    </li>
  )
}

export { TodoError }