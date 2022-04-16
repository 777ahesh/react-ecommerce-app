import React from "react";
import "./topbar.css";
import Flag from "../images/GB.png";
import Logo from "../images/logo.png";
import User from "../images/user.png";
import Avtar from "../images/avatar.png";
import Search from "../images/search.png";

import { NotificationsNone } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img src={Logo} alt="logo" />
          </span>
        </div>
        <div className="topCenter">
          <span className="logo">
            <img src={Search} alt="search" />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <span className="logo">
              <img src={Flag} alt="flag" />
            </span>
          </div>
          <div className="topbarIconContainer logo">
            <NotificationsNone />
            <span className="topIconBadge">8</span>
          </div>
          <div className="topbarIconContainer">
            <span className="logo">
              <img src={User} alt="user" />
            </span>
          </div>
          <div className="topbarIconContainer">
            <span className="logo">
              <img src={Avtar} alt="avtar" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
