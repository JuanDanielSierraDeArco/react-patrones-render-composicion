import React from "react";
import {CompleteIcon} from "./CompleteIcon";
import {DeleteIcon} from "./DeleteIcon";
import "./TodoItem.css"

function TodoItem(props){
    return (
        <li className="ti-todoitem">
          <CompleteIcon
            completed={props.completed}
            onCompleted={props.onCompleted}
          />
          <p className={`ti-todoitem-p ${props.completed && "ti-todoitem-p--completed"}`}>{props.text}</p>
          <DeleteIcon
          onDelete={props.onDelete}
          />
        </li>
    )
}

export {TodoItem};


// import React from "react";
// import { DeleteIcon } from '../TaskIcon/DeleteIcon';
// import { CompleteIcon } from '../TaskIcon/CompleteIcon';
// import { MdDeleteForever as Delete} from "react-icons/md";
// import './Taskitem.css'

// const Taskitem = ({tasks, completedValue, onCompleted, onDelete}) => {
//   return (
//     <li className='TodoItem'>
//          {/* <span className={`Icon-container Icon-container-check 
//           ${completedValue && 'Icon-container-check--active'}`}
//           onClick={onCompleted}
//           >V</span> */}
//         <CompleteIcon
//         className={`Icon-container Icon-svg Icon-container-check 
//           ${completedValue && 'Icon-container-check--active'}`}
//           onClick={onCompleted}/>
          
//         <p className={`TodoItem-p ${completedValue && "TodoItem-p--completed"}`}>{tasks}</p>
//         {/* <span className="Icon-container Icon-container-delete"
//           onClick={onDelete}
//         >X</span> */}
//         <Delete className="Icon-container Icon-container-delete"
//         onClick={onDelete}
//         />
//     </li>
//   );
// };

// export { Taskitem };