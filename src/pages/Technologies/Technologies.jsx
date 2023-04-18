import background from "../../assets/img/background-technology-desktop.jpg";

import "./Technologies.css";

import Carousel from "react-bootstrap/Carousel";

import Technology from "../../components/Technology/Technology";

import vehicle from "../../assets/img/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/img/image-spaceport-portrait.jpg";
import capsule from "../../assets/img/image-space-capsule-portrait.jpg";

function Technologies() {
  return (
    <div
      className="center"
      style={{ backgroundImage: `url(${background})`, minHeight: "100vh" }}
    >
      <p className="page-title">03 Space launch 101</p>
      <Carousel>
        <Carousel.Item>
          <Technology
            tech={"Lauch Vehicle"}
            description={`A launch vehicle or carrier rocket is a rocket-propelled vehicle
          used to carry a payload from Earth's surface to space, usually to
          Earth orbit or beyond. Our WEB-X carrier rocket is the most
          powerful in operation. Standing 150 metres tall, it's quite an
          awe-inspiring sight on the launch pad!`}
            img={vehicle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Technology
            tech={`spaceport`}
            description={`A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is
          ideally situated to take advantage of the Earth’s rotation for
          launch.`}
            img={spaceport}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Technology
            tech={"space capsule"}
            description={`A space capsule is an often-crewed spacecraft that uses a
          blunt-body reentry capsule to reenter the Earth's atmosphere
          without wings. Our capsule is where you'll spend your time
          during the flight. It includes a space gym, cinema, and plenty
          of other activities to keep you entertained.`}
            img={capsule}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Technologies;
