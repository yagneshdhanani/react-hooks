import React, { useState } from "react";
import "./Main.css";

export default function UseState() {
  const [count, setCount] = useState(0);

  const handleDec = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1 className="heading">useState hook</h1>
      <div className="counter">
        <h1 className="count">{count}</h1>
        <div className="button">
          <button className="dec-button" onClick={handleDec}>
            Decrement
          </button>
          <button className="reset-button" onClick={() => setCount(0)}>
            Reset
          </button>
          <button className="inc-button" onClick={handleInc}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
