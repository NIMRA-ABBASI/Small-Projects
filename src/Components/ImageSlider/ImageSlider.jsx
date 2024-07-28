import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageSlider.css";

function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchdata(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  

  useEffect(() => {
    url !== "" && fetchdata(url);
  }, [url]);
  console.log(currentImage);
  function handleLeftClick() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleRightClick() {
    setCurrentImage((currentImage + 1)%images.length );
  }

  if (loading) {
    return <div>Loading! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occured ! {errorMsg}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handleLeftClick}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => {
            
            return (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentImage === index
                    ? "currentImage"
                    : "currentImage inactive"
                }
              ></img>
            );
          })
        : null}

      <BsArrowRightCircleFill
        onClick={handleRightClick}
        className="arrow arrow-right"
      />

      <span className="circle">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={()=>setCurrentImage(index)}
                  className={
                    currentImage === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
