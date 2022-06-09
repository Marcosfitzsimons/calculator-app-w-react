import "../css/Header.css";
import Icon from "./Icon";

export function Header(props) {
  return (
    <header className="header">
      <div className="theme-switcher-container">
        <Icon isSunIcon={true} />
        <Icon isSunIcon={false} />
      </div>
      <span className="me">
        By Marcos Fitzsimons{" "}
        <a
          href="https://github.com/Marcosfitzsimons"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-github-fill"></i>
        </a>
      </span>
    </header>
  );
}

export default Header;
