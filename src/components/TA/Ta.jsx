import React from 'react'
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import Heart from "../images/heart.png";
import gt from "../images/gt.png";
import rt from "../images/rt.png";
import bt from "../images/bt.png";


function Ta() {
  return (
    <div className="widgetSm author">
      <span className="widgetSmTitle">Top Authors</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={f1}
            alt="face1"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jacqueline Likoki</span>
            <span className="widgetSmUserTitle"><img src={Heart} alt="heart" /> 13k</span>
          </div>
          <button className="widgetSmButton">
            
            <img src={gt} alt="green-trophy" />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={f2}
            alt="face2"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Oluchi Mazi</span>
            <span className="widgetSmUserTitle"><img src={Heart} alt="heart" /> 13k</span>
          </div>
          <button className="widgetSmButton">
            
            <img src={bt} alt="green-trophy" />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={f3}
            alt="face1"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Yi Hanying</span>
            <span className="widgetSmUserTitle"><img src={Heart} alt="heart" /> 13k</span>
          </div>
          <button className="widgetSmButton">
            
            <img src={rt} alt="green-trophy" />
          </button>
        </li>
        
      </ul>
    </div>
  )
}

export default Ta