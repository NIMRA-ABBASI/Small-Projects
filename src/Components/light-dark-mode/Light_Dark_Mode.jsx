import React from "react";
import useLocalStorage from "./useLocalStorage";
import"./styles.css"
function Light_Dark_Mode() {
  const [theme, setTheme] = useLocalStorage("Theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme = {theme}>
      <div className="container">
        <p>HELLO WORLD!</p>
        <button onClick={handleToggleTheme} className="btn">Change Theme</button>
      </div>
    </div>
  );
}

export default Light_Dark_Mode;
