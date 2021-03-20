# Getting Started With Hooks

Hooks let you use state and other React feature without writing class.

## :arrow_right: useState

### useState

let's you use local state in functional component

```javascript
import React, { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleInc = (prevCount = prevCount + 1);
  const handleDec = (prevCount = prevCount - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>decrement</button>
    </div>
  );
};

export default UseStateBasics;
```
