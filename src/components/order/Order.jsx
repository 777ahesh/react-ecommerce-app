
import WidgetSm from "../WidgetSm/WidgetSm";
import WidgetLg from "../Widgetlg/WidgetLg";
import "./order.css";

function Order() {
  return (
    <div className="orderMain">
      <div className="orderLeft">
      <WidgetLg/>
      </div>
      <div className="orderRight">
        <WidgetSm/>
      </div>
    </div>
  );
}

export default Order;
