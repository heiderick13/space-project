import background from "../../assets/img/background-destination-desktop.jpg";

import Container from "../../components/Container/Container";

import moon from "../../assets/img/image-moon.png";
import Carousel from "../../components/Carousel/Carousel";
import Destination from "../../components/Destination/Destination";

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
        <Carousel
          items={[
            <Destination
              img={moon}
              title={"Moon"}
              description={`See our planet as you’ve never seen it before. A perfect
              relaxing trip away to help regain perspective and come back
              refreshed. While you’re there, take in some history by
              visiting the Luna 2 and Apollo 11 landing sites.`}
              distance={"384,400"}
              travelTime={"3 days"}
            />,
            <Destination
              img={moon}
              title={"Moon"}
              description={`See our planet as you’ve never seen it before. A perfect
              relaxing trip away to help regain perspective and come back
              refreshed. While you’re there, take in some history by
              visiting the Luna 2 and Apollo 11 landing sites.`}
              distance={"384,400"}
              travelTime={"3 days"}
            />,
          ]}
        />
      </div>
    </>
  );
}

export default Destinations;
