import "../css/Icon.css";
import React from "react";

function Icon({ isSunIcon }) {
  return (
    <div className="icon-container">
      <i className={isSunIcon ? "ri-sun-line active" : "ri-moon-line"}></i>
    </div>
  );
}

export default Icon;
