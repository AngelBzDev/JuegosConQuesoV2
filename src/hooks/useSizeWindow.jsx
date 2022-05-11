import { useState } from "react";

const useSizeWindow = () => {
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSizeWindow(window.innerWidth);
  });

  return sizeWindow;
};

export default useSizeWindow;
