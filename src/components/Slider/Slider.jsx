import "./Slider.css";

// import Carousel from "react-bootstrap/Carousel";

function Slider({ items }) {
  return (
    <div className="carousel">
      <button className="right">
        <i className="bi bi-arrow-right-short"></i>
      </button>
      <button className="left">
        <i className="bi bi-arrow-left-short "></i>
      </button>
      <div className="carousel-items">
        {items.length > 0 && items.map((item) => item)}
      </div>
    </div>
  );
}

export default Slider;
