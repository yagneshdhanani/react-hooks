import React, { useEffect, useRef, useState } from "react";
import "./Main.css";

function UseRef() {
  const [inputValue, setInputValue] = useState("");

  const valueRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    valueRef.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1 className="heading">useRef Hook</h1>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            ref={inputRef}
            className="input-box"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" onClick={focusInput}>
            Focus Input
          </button>
        </div>
        <div className="value-container">
          <span>Current Value : </span>
          {inputValue}
        </div>
        <div className="value-container">
          <span>Previous Value : </span>
          {valueRef.current}
        </div>
      </div>
    </div>
  );
}

export default UseRef;
