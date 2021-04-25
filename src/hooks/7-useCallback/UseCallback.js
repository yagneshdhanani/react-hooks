import React, { useCallback, useState } from "react";
import Lists from "./Lists";
import "./Main.css";

function UseCallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getNumbers = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme} className="body">
      <h1>useCallback Hook</h1>
      <button
        className="toggle-btn"
        onClick={() => setDark((prevDarkTheme) => !prevDarkTheme)}
      >
        Toggle Theme
      </button>
      <input
        type="number"
        name="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <Lists getNumbers={getNumbers} />
    </div>
  );
}

export default UseCallback;
