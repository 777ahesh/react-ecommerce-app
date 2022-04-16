import "./installation.css";
import Cd from "../images/cd.png";
import Ti from "../images/ti.png";

function Installation() {
  return (
    <div className="installation">
      <div className="installLeft">
        <span className="logo">
          <img src={Cd} alt="current" />
        </span>
      </div>
      <div className="installRight">
      <span className="logo">
          <img src={Ti} alt="total" />
        </span>
      </div>

    </div>
  );
}

export default Installation;
