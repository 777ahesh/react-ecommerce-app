import "./widgetsm.css";
import ReactStars from "react-rating-stars-component";
import Chrome from "../images/chrome.png";
import Drive from "../images/drive.png";
import Evernote from "../images/evernote.png";
import Dropbox from "../images/dropbox.png";
import GitHub from "../images/github.png";
import Mac from "../images/mac.png";
import Win from "../images/windows.png";

export default function WidgetSm() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top Related Application</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={Chrome} alt="chrome" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Chrome</span>
            <span className="widgetSmUserTitle">
              <img src={Mac} alt="mac" /> Mac
              <Button type="Free" />
            </span>
          </div>
          <button className="widgetSmButton">
            <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
            />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Drive} alt="drive" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Drive</span>
            <span className="widgetSmUserTitle">
              <img src={Mac} alt="mac" />
              Mac <Button type="Free" />
            </span>
          </div>
          <button className="widgetSmButton">
          <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
            />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Dropbox} alt="dropbox" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dropbox</span>
            <span className="widgetSmUserTitle">
              <img src={Win} alt="win" />
              Windows <Button type="paid" />
            </span>
          </div>
          <button className="widgetSmButton">
          <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
            />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Evernote} alt="evernote" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Evernote</span>
            <span className="widgetSmUserTitle">
              <img src={Mac} alt="Mac" /> Mac <Button type="paid" />
            </span>
          </div>
          <button className="widgetSmButton">
          <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
            />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={GitHub} alt="github" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Github</span>
            <span className="widgetSmUserTitle">
              <img src={Win} alt="win" />
              Windows <Button type="Free" />
            </span>
          </div>
          <button className="widgetSmButton">
          <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
