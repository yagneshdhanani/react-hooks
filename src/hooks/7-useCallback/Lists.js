import React, { useEffect, useState } from "react";

function Lists({ getNumbers }) {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(getNumbers());
    console.log("numbers rendered");
  }, [getNumbers]);

  return (
    <div>
      <h1>Lists</h1>
      {numbers.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </div>
  );
}

export default Lists;
