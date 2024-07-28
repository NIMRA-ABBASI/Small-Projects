import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css"

function StarRating(props) {
  const [rating, setRating] = useState(0);
  const [hover, setHovering] = useState(0);

  function handleMouseClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    setHovering(currentIndex);
  }

  function handleMouseLeave() {
    setHovering(rating);
  }
  return (
    <div className="star_rating">
      {[...Array(props.noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleMouseClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
