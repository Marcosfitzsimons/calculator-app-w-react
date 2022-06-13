import React from "react";
import "../css/DarkMode.css";

export function DarkMode(props) {

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        const sunIcon = document.querySelector(".ri-sun-line");
        const moonIcon = document.querySelector(".ri-moon-line");
        sunIcon.classList.remove("active");
        moonIcon.classList.toggle("active");
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        const sunIcon = document.querySelector(".ri-sun-line");
        const moonIcon = document.querySelector(".ri-moon-line");
        sunIcon.classList.toggle("active");
        moonIcon.classList.remove("active");
    };

    const storedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);

    if (defaultDark) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }

    return (
        <section className="theme-switcher-container">
            <div className="icon-container">
                <i className="ri-sun-line active" onClick={setLight}></i>
            </div>
            <div className="icon-container">
                <i className="ri-moon-line" onClick={setDark}></i>
            </div>
        </section>
    );
}

export default DarkMode;
