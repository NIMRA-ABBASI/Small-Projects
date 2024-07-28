import React, { useState , useEffect } from "react";


function useLocalStorage(key, defaultvalue) {
  const [value, setValue] = useState(() => {
    /*  Extracting value from local storage*/
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultvalue)
      );
    } catch (e) {
      console.log(e);
      currentValue = defaultvalue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
