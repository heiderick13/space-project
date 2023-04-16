import "./Carousel.css";

function Carousel({ items }) {
  return (
    <div className="carousel">
      <i className=" control left">L</i>
      <i className=" control right">R</i>

      {items.length > 0 &&
        items.map((item) => {
          return item;
        })}
    </div>
  );
}

export default Carousel;
