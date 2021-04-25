import React from "react";

import { useTheme, useThemeUpdate } from "./ThemeContext";
import "./Main.css";

function ContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? "rgb(49, 49, 49)" : "rgb(204, 204, 204)",
    color: darkTheme ? "white" : "black",
  };

  return (
    <>
      <div className="switch" onClick={toggleTheme}>
        <div
          className={`slider round ${darkTheme && "toggle slider-light"}`}
        ></div>
      </div>
      <div className="theme-container" style={themeStyle}>
        <p className="text">Change Color</p>
      </div>
    </>
  );
}

export default ContextComponent;
