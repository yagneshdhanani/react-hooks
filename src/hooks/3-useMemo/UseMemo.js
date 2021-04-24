import React, { useState, useMemo } from "react";
import "./Main.css";

const calSqaure = (num) => {
  for (let index = 0; index < 10000000; index++) {}
  return num * num;
};

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  let sqaure = useMemo(() => calSqaure(number), [number]);

  const themeStyle = {
    backgroundColor: dark ? "aliceblue" : "black",
    color: dark ? "black" : "aliceblue",
  };

  return (
    <div>
      <h1>useMemo Hook</h1>
      <div className="body" style={themeStyle}>
        <div className="form-field">
          <label htmlFor="number">Enter Number</label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
        </div>
        <button onClick={() => setDark(!dark)}>Change Theme</button>
        <div className="form-field">
          <label>Square :-</label>
          <div className="output-field">{sqaure}</div>
        </div>
      </div>
    </div>
  );
}
