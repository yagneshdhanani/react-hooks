import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLoger from "./useUpdateLoger";

function CustomHook() {
  const [name, setName] = useLocalStorage("name", "");

  useUpdateLoger(name);
  return (
    <div>
      <h1>Custom Hook</h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>hello {name === "" ? "...." : name}</h1>
    </div>
  );
}

export default CustomHook;
