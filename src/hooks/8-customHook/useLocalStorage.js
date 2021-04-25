import { useEffect, useState } from "react";

function getSevedItems(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

function useLocalStorage(key, initialValue) {
  const [value, setvalue] = useState(() => {
    return getSevedItems(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setvalue];
}

export default useLocalStorage;
