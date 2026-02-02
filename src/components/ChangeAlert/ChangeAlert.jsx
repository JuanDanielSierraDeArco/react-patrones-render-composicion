import React from "react";
import { TbRefreshAlert } from "react-icons/tb";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({sincronize}) {
  const {show, toggleShow} = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ca-container">
        <div className="ca-container-div">
          <TbRefreshAlert className="ca-icon"/>
          <h1 className="ca-text">Hay cambios disponibles</h1>
          <button
            className="ca-button ca-button-refres"
            onClick={() => {
              toggleShow(false);
            }}
          >
            Actualizar ahora
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
