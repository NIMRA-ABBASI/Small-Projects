import React from "react";
import { useLayoutEffect , useState } from "react";

function useWindowResize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function handleResize()
    {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowResize;
