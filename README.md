# Getting Started With Hooks

Hooks let you use state and other React feature without writing class.

## :arrow_right: useState

## :arrow_right: useEffect

## :arrow_right: useMemo

## useState

let's you use local state in functional component

> Single state variable

```javascript
import React, { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleInc = (prevCount) => prevCount + 1;
  const handleDec = (prevCount) => prevCount - 1;

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

> Use Object state variable

```javascript
const [state, setState] = useState({ age: 19, siblingsNum: 4 });
const handleClick = (val) =>
  setState({
    ...state,
    [val]: state[val] + 1,
  });
const { age, siblingsNum } = state;
```

> Initialize state from function

```javascript
const [token] = useState(() => {
  let token = window.localStorage.getItem("my-token");
  return token || "default#-token#";
});
```

## useEffect

Invoked side effects from within functional components.

> Basic side effect

```javascript
import React, { useEffect } from "react";

const UseEffectHook = () => {
  useEffect(() => {
    console.log("It's only runs one when component is mount");
  }, []);

  return (
    <div>
      <h1>Use Effect Hooks</h1>
    </div>
  );
};
```

> Effect with cleanup

```javascript
const EffectCleanup = () => {
  useEffect(() => {
    const clicked = () => console.log("window clicked");
    window.addEventListener("click", clicked);

    // return a clean-up function
    return () => {
      window.removeEventListener("click", clicked);
    };
  }, []);

  return (
    <div>
      When you click the window you'll find a message logged to the console
    </div>
  );
};
```

> Multiple effects

```javascript
const MultipleEffects = () => {
  // 🍟
  useEffect(() => {
    const clicked = () => console.log("window clicked");
    window.addEventListener("click", clicked);

    return () => {
      window.removeEventListener("click", clicked);
    };
  }, []);

  // 🍟 another useEffect hook
  useEffect(() => {
    console.log("another useEffect call");
  });

  return <div>Check your console logs</div>;
};
```

> Skipping effects (array dependency)

```javascript
useEffect(() => {
  setEffectLogs((prevEffectLogs) => [
    ...prevEffectLogs,
    "effect fn has been invoked",
  ]);
}, []);
```

> Skipping effects (empty array dependency)

```javascript
useEffect(() => {
  setEffectLogs((prevEffectLogs) => [
    ...prevEffectLogs,
    "effect fn has been invoked",
  ]);
}, []);
```

## useMemo

Used to memoized value
Syntax is same as the useEffect hook

> Memoize the complexFunction which depends on "a"

```javascript
const result = useMemo(() => {
  return complexFunction(a);
}, [a]);
```

> Referential Equality

Every time component is re-render new object is created and this cause to the effect on useEffect

```javascript
function Component({ param1, param2 }) {
  const params = useMemo(() => {
    return { param1, param2, param3: 5 };
  }, [param1, param2]);

  useEffect(() => {
    callApi(params);
  }, [params]);
}
```
