import { useState } from "react";

export function useSlide(slides) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function changeSlide(i, e) {
    e.preventDefault();

    if (i < 0 || i >= slides.length) return;

    setCurrentSlide(i);
  }

  return {
    currentSlide,
    currentComponent: slides[currentSlide],
    changeSlide,
  };
}
