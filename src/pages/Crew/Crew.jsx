import Carousel from "../../components/Carousel/Carousel";
import Crewmate from "../../components/Crewmate/Crewmate";
import background from "../../assets/img/background-crew-desktop.jpg";

import commander from "../../assets/img/image-douglas-hurley.png";
import specialist from "../../assets/img/image-mark-shuttleworth.png";
import pilot from "../../assets/img/image-victor-glover.png";
import engineer from "../../assets/img/image-anousheh-ansari.png";

function Crew() {
  return (
    <div
      className="center"
      style={{
        backgroundImage: `url(${background})`,
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "end",
      }}
    >
      <p className="page-title">02 Meet your crew</p>
      <Carousel
        items={[
          <Crewmate
            position={"Commander"}
            name={"Douglas hurley"}
            description={
              "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
            }
            img={commander}
          />,
          <Crewmate
            position={"mission specialist"}
            name={"mark SHUTTLEWORTH"}
            description={
              "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
            }
            img={specialist}
          />,
          <Crewmate
            position={"pilot"}
            name={"victor glover"}
            description={
              "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
            }
            img={pilot}
          />,
          <Crewmate
            position={"flight engineer"}
            name={"Anousheh Ansari"}
            description={
              "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
            }
            img={engineer}
          />,
        ]}
      />
    </div>
  );
}

export default Crew;
