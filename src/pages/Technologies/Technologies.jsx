import background from "../../assets/img/background-technology-desktop.jpg";

import "./Technologies.css";

import Carousel from "react-bootstrap/Carousel";

import Technology from "../../components/Technology/Technology";

import vehicleImg from "../../assets/img/image-launch-vehicle-portrait.jpg";
import spaceportImg from "../../assets/img/image-spaceport-portrait.jpg";
import capsuleImg from "../../assets/img/image-space-capsule-portrait.jpg";
import Slider from "../../components/Slider/Slider";

function Technologies() {
  const vehicle = (
    <Technology
      tech={"Lauch Vehicle"}
      description={`A launch vehicle or carrier rocket is a rocket-propelled vehicle
  used to carry a payload from Earth's surface to space, usually to
  Earth orbit or beyond. Our WEB-X carrier rocket is the most
  powerful in operation. Standing 150 metres tall, it's quite an
  awe-inspiring sight on the launch pad!`}
      img={vehicleImg}
    />
  );
  const spaceport = (
    <Technology
      tech={`spaceport`}
      description={`A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is
          ideally situated to take advantage of the Earth’s rotation for
          launch.`}
      img={spaceportImg}
    />
  );

  const capsule = (
    <Technology
      tech={"space capsule"}
      description={`A space capsule is an often-crewed spacecraft that uses a
          blunt-body reentry capsule to reenter the Earth's atmosphere
          without wings. Our capsule is where you'll spend your time
          during the flight. It includes a space gym, cinema, and plenty
          of other activities to keep you entertained.`}
      img={capsuleImg}
    />
  );
  return (
    <div
      className="center"
      style={{ backgroundImage: `url(${background})`, minHeight: "100vh" }}
    >
      <p className="page-title">03 Space launch 101</p>
      <Slider items={[vehicle, spaceport, capsule]} />
    </div>
  );
}

export default Technologies;
