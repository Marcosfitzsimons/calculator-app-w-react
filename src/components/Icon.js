import "../css/Icon.css";

function Icon({ isSunIcon }) {
  return (
    <div className="icon-container">
      <i className={isSunIcon ? "ri-sun-line" : "ri-moon-line"}></i>
    </div>
  );
}

export default Icon;
