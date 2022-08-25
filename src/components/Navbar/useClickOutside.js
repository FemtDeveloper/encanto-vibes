import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
  let toggleRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!toggleRef.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return toggleRef;
};
