import "./final.css";
import Tic from "../tic/Tic";
import Ta from "../TA/Ta";
// import W1 from "../images/w1.png";
// import W2 from "../images/w2.png";
import Conversion1 from "../Conversions/Conversion1";
import Conversion2 from "../Conversions/Conversion2";

function Final() {
  return (
    <div className="finalDiv">
      <div className="finalLeft">
        <Tic/>
      </div>
      <div className="finalCenter">
        <Ta/>
      </div>
      <div className="finalRight">
        <div className="right1">
          <Conversion1/>
        </div>
        <div className="right2">
         <Conversion2/>
        </div>
      </div>
    </div>
  );
}

export default Final;
