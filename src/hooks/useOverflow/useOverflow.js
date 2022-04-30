import { useEffect } from "react";

// select parent element in the DOM
const parentElement = document.querySelector("#root");

const useOverflow = () => {
  useEffect(() => {
    const overflowHidden = () => parentElement.classList.add("overflow-hidden");
    overflowHidden();
  }, []);

  return [];
};

export default useOverflow;
