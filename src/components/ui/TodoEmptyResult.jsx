import "./TodoEmpty.css"
function TodoEmptyResult({searchText}){
  return(
    <li className="tey-todoitem">
      <span className="tey-icon">📝</span>
      <p className="tey-title">No hay resultados para!</p>
      <p className="tey-title"><strong>{searchText}</strong></p>
    </li>
  )
}

export { TodoEmptyResult  }