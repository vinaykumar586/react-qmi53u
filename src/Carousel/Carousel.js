import React, { useState } from 'react';
import images from './images';
import './Carousel.css';
export default function Carousel() {
  const [index, setIndex] = useState(0);
  function prevClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  function nextClick() {
    if (index < images.length) {
      setIndex(index + 1);
    }
  }
  return (
    <div className="carousel">
      <button
        className="previousRound"
        disabled={index === 0 ? true : false}
        onClick={() => prevClick()}
      >
        &#8249;
      </button>
      <img id="img" src={images[index]} width="500" height="300" />
      <button
        class="nextRound"
        disabled={index === images.length - 1 ? true : false}
        onClick={() => nextClick()}
      >
        &#8250;
      </button>
    </div>
  );
}
