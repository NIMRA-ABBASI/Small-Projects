import React, { useRef } from "react";
import useFetch from "../useFetch/useFetch";
function Scroll_Top_Bottom() {
  const { data, loading, errorMsg } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const BottomRef = useRef(null);

  function handleScrollToBottom()
  {
    BottomRef.current.scrollIntoView({behavior:'smooth'})
  }


  function handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }


  if (errorMsg !== null) <h2>{errorMsg}</h2>;
  if (loading) <h2>Loading Data.Please wait...</h2>;
  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={BottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}

export default Scroll_Top_Bottom;
