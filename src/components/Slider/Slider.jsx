import "./Slider.css";

import Carousel from "react-bootstrap/Carousel";

function Slider({ items }) {
  return (
    <Carousel className="carousel">
      <div className="carousel-items">
        {items.length > 0 &&
          items.map((item) => {
            return <Carousel.Item>{item}</Carousel.Item>;
          })}
      </div>
    </Carousel>
  );
}

export default Slider;
