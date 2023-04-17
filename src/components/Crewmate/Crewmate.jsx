import Container from "../Container/Container";

import "./Crewmate.css";

function Crewmate({ position, name, description, img }) {
  return (
    <div className="item">
      <Container
        leftContent={
          // <div id="mission-specialist" class="crew-member item d-flex">
          <div className=" crewmate-text">
            <p className="crew-position">{position}</p>
            <p className="crewmate-name">{name}</p>

            <p className="crewmate-description">{description}</p>
          </div>
        }
        rightContent={
          <div className="crewmate-img">
            <img src={img} alt="" />
          </div>
        }
      />
    </div>
  );
}

export default Crewmate;
