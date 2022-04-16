import "./final.css";
import Tic from "../images/tic.png";
import Ta from "../images/ta.png";
import W1 from "../images/w1.png";
import W2 from "../images/w2.png";

function Final() {
  return (
    <div className="finalDiv">
      <div className="finalLeft">
        <span className="logo">
          <img src={Tic} alt="Tic" />
        </span>
      </div>
      <div className="finalCenter">
        <span className="logo">
          <img src={Ta} alt="top-authors" />
        </span>
      </div>
      <div className="finalRight">
        <div className="right1">
          <span className="logo">
            <img src={W1} alt="widget1" />
          </span>
        </div>
        <div className="right2">
          <span className="logo">
            <img src={W2} alt="widget2" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Final;
