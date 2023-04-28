import background from "../../assets/img/background-destination-desktop.jpg";

import moon from "../../assets/img/image-moon.png";
import mars from "../../assets/img/image-mars.png";
import europa from "../../assets/img/image-europa.png";
import titan from "../../assets/img/image-titan.png";

import Slider from "../../components/Slider/Slider";
import Destination from "../../components/Destination/Destination";

// import Carousel from "react-bootstrap/Carousel";

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
        <Slider
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
              img={mars}
              title={"Mars"}
              description={`Don’t forget to pack your hiking boots. You’ll need them to
              tackle Olympus Mons, the tallest planetary mountain in our solar
              system. It’s two and a half times the size of Everest!`}
              distance={"225 mil."}
              travelTime={"9 months"}
            />,
            <Destination
              img={europa}
              title={"Europa"}
              description={`The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for
              a bit of ice skating, curling, hockey, or simple relaxation in
              your snug wintery cabin.`}
              distance={"628 mil."}
              travelTime={"3 years"}
            />,
            <Destination
              img={titan}
              title={"Titan"}
              description={`The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.`}
              distance={"1.6 bil."}
              travelTime={"7 years"}
            />,
          ]}
        />
      </div>
    </>
  );
}

export default Destinations;
