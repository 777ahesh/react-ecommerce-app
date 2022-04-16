import Hero from "../images/hero.png";
import FeaturedApp from "../images/FeaturedApp.png";
import "./welcome.css";
function Welcome() {
  return (
    <div className="hero">
      <div className="heroWrapper">
        <div className="leftPart">
          <h4>
            Welcome back
            <br />
            Fabianna Company!
          </h4>
          <p>
            If you are going to use a passage of Lorem Ipsum, <br />
            you need to be sure there isn't anything
          </p>
          <button className="btn">Go Now</button>
        </div>
        <div className="rightPart">
          <span className="logo">
            <img src={Hero} alt="hero" />
          </span>
        </div>
      </div>
      <div className="heroSideContainer">
        <span className="logo">
          <img src={FeaturedApp} alt="hero" />
        </span>
      </div>
    </div>
  );
}

export default Welcome;
