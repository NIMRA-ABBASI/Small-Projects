import React, { useRef } from "react";

function Scroll_To_Section() {
  const Ref = useRef(null);
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollToCurrentSection()
  {
    let pos = Ref.current.getBoundingClientRect().top;
    window.scrollTo({top:pos,behavior:'smooth'})
  }
  return (
    <div>
      <h1>Scroll To Paticular Section</h1>
      <button onClick={handleScrollToCurrentSection}>Click To Scroll</button>
      {data.map((Item, index) => (
        <div ref={index === 3 ? Ref : null} style={Item.style}>
          <h2>{Item.label}</h2>
        </div>
      ))}
    </div>
  );
}

export default Scroll_To_Section;
