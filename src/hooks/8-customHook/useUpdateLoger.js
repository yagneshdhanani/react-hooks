import { useEffect } from "react";

export default function useUpdateLoger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
