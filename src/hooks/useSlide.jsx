import { useState } from "react";

export function useForm(slides) {
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
    isLastSlide: currentSlide + 1 === slides.length - 1 ? true : false,
    isFirstSlide: currentSlide === 0 ? true : false,
  };
}
