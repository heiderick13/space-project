import "./Slider.css";

import { useSlide } from "../../hooks/useSlide";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";

function Slider({ items }) {
  const { currentSlide, currentComponent, changeSlide } = useSlide(items);
  return (
    <div className="carousel">
      <button
        className="right"
        onClick={(e) => {
          changeSlide(currentSlide + 1, e);
        }}
      >
        {/* <i className="bi bi-arrow-right-short"></i> */}
        <BsFillCaretRightFill />
      </button>
      <button
        className="left"
        onClick={(e) => {
          changeSlide(currentSlide - 1, e);
        }}
      >
        {/* <i className="bi bi-arrow-left-short "></i> */}
        <BsFillCaretLeftFill />
      </button>
      <div className="carousel-items">{currentComponent}</div>
    </div>
  );
}

export default Slider;
