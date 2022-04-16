import Ni from "../images/ni.png";
import TopApp from "../images/app.png";
import "./order.css";

function Order() {
  return (
    <div className="orderMain">
      <div className="orderLeft">
        <span className="logo">
          <img src={Ni} alt="New-invoice" />
        </span>
      </div>
      <div className="orderRight">
        <span className="logo">
          <img src={TopApp} alt="top-app" />
        </span>
      </div>
    </div>
  );
}

export default Order;
