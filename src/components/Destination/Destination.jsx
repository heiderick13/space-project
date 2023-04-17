import "./Destination.css";

import Container from "../Container/Container";

function Destination({ img, title, description, distance, travelTime }) {
  return (
    <div className="item">
      <Container
        leftContent={
          <div className="destination-img">
            <img src={img} alt="" />
          </div>
        }
        rightContent={
          <div className="destination-text">
            <p className="destinations-title">{title}</p>

            <p className="destination-description">{description}</p>

            <div className="distance-info d-flex">
              <div className="avg">
                <p className="avg-dist">Avg. distance</p>
                <p className="avg-dist-value">{distance} km</p>
              </div>

              <div className="time">
                <p className="est-time">Est. travel time</p>
                <p className="time-est">{travelTime}</p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default Destination;
