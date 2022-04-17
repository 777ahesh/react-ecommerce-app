import "./featureinfo.css";
import Bar1 from "../images/Type.png";
import Bar2 from "../images/g2.png";
import Bar3 from "../images/g3.png";
import Up from "../images/up.png";
import Down from "../images/dn.png";


function FeatureInfo() {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredLeft">
            <span className="featuredTitle">Total Active Users</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                <img src={Up} alt="up-arrow" />+2.6%{" "}
              </span>
            </div>
            <span className="featuredSub">18,765</span>
          </div>
          <div className="featuredRight">
            <span className="logo">
              <img src={Bar1} alt="graph" />
            </span>
          </div>
        </div>

        <div className="featuredItem">
          <div className="featuredLeft">
            <span className="featuredTitle">Total Installed</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
              <img src={Down} alt="down-arrow" /> -0.06%{" "}
              </span>
            </div>
            <span className="featuredSub">4,876</span>
          </div>
          <div className="featuredRight">
            <span className="logo">
              <img src={Bar2} alt="graph" />
            </span>
          </div>
        </div>
        <div className="featuredItem">
          <div className="featuredLeft">
            <span className="featuredTitle">Total Downloads</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
              <img src={Up} alt="up-arrow" /> +8.6%{" "}
              </span>
            </div>
            <span className="featuredSub">678</span>
          </div>
          <div className="featuredRight">
            <span className="logo">
              <img src={Bar3} alt="graph" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureInfo;
