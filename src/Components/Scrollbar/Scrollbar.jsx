import React, { useEffect } from "react";
import { useState } from "react";
import "./Scrollbar.css";

function Scrollbar({ url }) {
  const [data, setData] = useState([]);
  const [load, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [scrollPercentage, setScrollPercetage] = useState(0);

  async function fetchData(geturl) {
    try {
      setLoading(true);
      const response = await fetch(geturl);
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setData(result.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handleScrollPercenatge() {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercetage((howMuchScroll / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercenatge);

    return window.removeEventListener("scroll", () => {});
  });

  if (load) return <div>Data is loading.Please wait.</div>;
  if (errorMsg !== null) return <div>Error {errorMsg}</div>;

  return (
    <div className="container">
      <div className="head-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((items) => {
              return (
                <div className="items-container">
                  <p>{items.title}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Scrollbar;
