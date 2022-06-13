import "../css/Header.css";
import React from "react";
import DarkMode from "./DarkMode";

export function Header(props) {
  return (
    <header className="header">
      <DarkMode />
      <span className="me">
        By Marcos Fitzsimons{" "}
        <a
          href="https://github.com/Marcosfitzsimons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill"></i>
        </a>
      </span>
    </header>
  );
}

export default Header;
