import "./Home.css";

function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 presentation">
          <p class="sub-title">So, you want to travel to</p>
          <h1 class="title">Space</h1>
          <p class="trip-description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div class="col-md-6 wrapper">
          <a href="./src/views/destinations.html" class="explore">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
