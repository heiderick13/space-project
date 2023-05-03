import { Link } from "react-router-dom";

import "./Home.css";

import background from "../../assets/img/background-home-desktop.jpg";

import Container from "../../components/Container/Container";

function Home() {
  return (
    <div
      className="home center"
      style={{
        backgroundImage: `url(${background})`,
        minHeight: "100vh",
        height: "fit-content",
      }}
    >
      <div>
        <Container
          leftContent={
            <div className="presentation">
              <p className="sub-title">So, you want to travel to</p>
              <h1 className="title">Space</h1>
              <p className="trip-description">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          }
          rightContent={
            <div className=" wrapper">
              <Link to="/destinations" className="explore">
                Explore
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Home;
