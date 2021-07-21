import "./App.css";

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function SwitchButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onClick = () => {
        if (darkMode)
            theme.dispatch({ type: "LIGHTMODE" });
        else
            theme.dispatch({ type: "DARKMODE" });
    };

    return (
        <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} onClick={onClick}>
            {darkMode ? "Light" : "Dark"}
        </button>
    );
}