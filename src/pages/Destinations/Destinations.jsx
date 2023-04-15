import background from "../../assets/img/background-destination-desktop.jpg";

import Container from "../../components/Container/Container";

import moon from "../../assets/img/image-moon.png";

function Destinations() {
  return (
    <>
      <div
        className="center"
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <p className="page-title">01 Pick your destination</p>
        <Container
          leftContent={
            <div className="destination-img">
              <img src={moon} alt="" />
            </div>
          }
          rightContent={
            <div className="destination-text">
              <p className="destinations-title">Moon</p>

              <p className="destination-description">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>

              <div className="distance-info d-flex">
                <div className="avg">
                  <p className="avg-dist">Avg. distance</p>
                  <p className="avg-dist-value">384,400 km</p>
                </div>

                <div className="time">
                  <p className="est-time">Est. travel time</p>
                  <p className="time-est">3 days</p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}

export default Destinations;
