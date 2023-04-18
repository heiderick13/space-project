import Container from "../Container/Container";

import "./Technology.css";

function Technology({ tech, description, img }) {
  return (
    <>
      <Container
        leftContent={
          <div className="tech-text">
            <p className="terminology">The terminology...</p>
            <div className="tech">{tech}</div>

            <p className="tech-description">{description}</p>
          </div>
        }
        rightContent={
          <div className="tech-img">
            <img src={img} alt="" height="450" />
          </div>
        }
      />
    </>
  );
}

export default Technology;
