import React from "react";
import "./TodoItem.css"

function TodoItem(props){
    return (
        <li className="ti-todoitem">
            <span className={`ti-icon ti-icon-check ${props.completed && "ti-icon-check-completed"}`}
            onClick={props.onCompleted}
            >X</span>
            <p className={`ti-todoitem-p ${props.completed && "ti-todoitem-p--completed"}`}>{props.text}</p>
            <span className={`ti-icon ti-icon-delete`}
            onClick={props.onDelete}
            >V</span>
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