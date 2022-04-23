import React from "react";
import "./tic.css";
import Canada from "../images/canada.png";
import France from "../images/france.png";
import India from "../images/india.png";
import Korea from "../images/korea.png";
import Usa from "../images/usa.png";
import Android from "../images/android.png";
import Mac from "../images/mac.png";
import Win from "../images/windows.png";
function Tic() {
  return (
    <div className="widgetSm country">
      <span className="widgetSmTitle">Top Installed Countries</span>
      <ul className="ul-container">
        <li className="li-container">
          <div className="img-container ">
            <img className="img-flag" src={Canada} alt="canada" />
          </div>
          <div className=" os os-country"> Canada</div>
          <div className=" os os-android">
            <img  src={Android} alt="android" /> 63
          </div>
          <div className=" os os-win">
            <img  src={Win} alt="win" /> 69
          </div>
          <div className=" os os-mac">
            <img  src={Mac} alt="Mac" /> 98
          </div>          
        </li>
        <li className="li-container">
          <div className="img-container ">
            <img className="img-flag" src={France} alt="france" />
          </div>
          <div className=" os os-country"> France</div>
          <div className=" os os-android">
            <img  src={Android} alt="android" /> 2.3k
          </div>
          <div className=" os os-win">
            <img  src={Win} alt="win" /> 44
          </div>
          <div className=" os os-mac">
            <img  src={Mac} alt="Mac" /> 50
          </div>          
        </li>
        <li className="li-container">
          <div className="img-container ">
            <img className="img-flag" src={India} alt="india" />
          </div>
          <div className=" os os-country"> India</div>
          <div className=" os os-android">
            <img  src={Android} alt="android" /> 31
          </div>
          <div className=" os os-win">
            <img  src={Win} alt="win" /> 2.1k
          </div>
          <div className=" os os-mac">
            <img  src={Mac} alt="Mac" /> 82
          </div>          
        </li>
        <li className="li-container">
          <div className="img-container ">
            <img className="img-flag" src={Korea} alt="korea" />
          </div>
          <div className=" os os-country"> Korean</div>
          <div className=" os os-android">
            <img  src={Android} alt="android" /> 69
          </div>
          <div className=" os os-win">
            <img  src={Win} alt="win" /> 1.8k
          </div>
          <div className=" os os-mac">
            <img  src={Mac} alt="Mac" /> 27
          </div>          
        </li>
        <li className="li-container">
          <div className="img-container ">
            <img className="img-flag" src={Usa} alt="Usa" />
          </div>
          <div className=" os os-country"> USA</div>
          <div className=" os os-android">
            <img  src={Android} alt="android" /> 85
          </div>
          <div className=" os os-win">
            <img  src={Win} alt="win" /> 89
          </div>
          <div className=" os os-mac">
            <img  src={Mac} alt="Mac" /> &nbsp; 78
          </div>          
        </li>
        
      </ul>
    </div>
  );
}

export default Tic;
