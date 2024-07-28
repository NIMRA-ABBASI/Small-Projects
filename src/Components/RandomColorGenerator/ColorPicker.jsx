import React, { useEffect } from "react";
import { useState } from "react";
function ColorPicker() {

  const [selectedType, setSelectedType] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(()=>{
    selectedType === "hex" ? hexColorGenerator() : rgbColorGenerator();
  }, [selectedType]);

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const hexColorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const rgbColorGenerator = () => {
    const r = randomColorUtility(255);
    const g = randomColorUtility(255);
    const b = randomColorUtility(255);
    let rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => setSelectedType("rgb")}>Create RGB Color</button>
      <button onClick={() => setSelectedType("hex")}>Create HEX Color</button>
      <button onClick={selectedType === "hex" ? hexColorGenerator : rgbColorGenerator}>Generate Random Color</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{selectedType}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default ColorPicker;
