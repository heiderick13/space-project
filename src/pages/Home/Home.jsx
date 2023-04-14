import "./Home.css";

import background from "../../assets/img/background-home-desktop.jpg";

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${background})`, minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 presentation">
            <p className="sub-title">So, you want to travel to</p>
            <h1 className="title">Space</h1>
            <p className="trip-description">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="col-md-6 wrapper">
            <a href="./src/views/destinations.html" className="explore">
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
