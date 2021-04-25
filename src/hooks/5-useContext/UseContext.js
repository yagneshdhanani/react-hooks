import React from "react";
import ContextComponent from "./ContextComponent";
import ThemeProvider from "./ThemeContext";

function UseContext() {
  return (
    <ThemeProvider>
      <h1>useContext Hook</h1>
      <ContextComponent />
    </ThemeProvider>
  );
}

export default UseContext;
