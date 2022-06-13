import "../css/Btn.css";
import React from "react";

function Btn(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  const isEquals = (value) => {
    return value === "=";
  };

  return (
    <button
      className={`btn-container ${isEquals(props.children) ? "equals-btn" : ""
        } ${isOperator(props.children) ? "operator" : ""}`.trim()}
      // .trim permite eliminar los espacios del principio o final de una cadena de caracteres.
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
  // props.children utiliza el valor dentro de mi componente con etiqueta de cierre => <Btn>valor que se va a asignar a props.children</Btn>
}

export default Btn;
