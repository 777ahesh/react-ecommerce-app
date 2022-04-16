import "./sidebar.css";
import Avtar from "../images/avatar.png";
import Blog from "../images/blog.png";
import Logo from "../images/logo.png";
import Sb from "../images/sb.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailIcon from "@mui/icons-material/Mail";
import ForumIcon from "@mui/icons-material/Forum";
import ComputerIcon from "@mui/icons-material/Computer";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="topLeft">
            <span className="logo">
              <img src={Logo} alt="logo" />
            </span>
          </div>
          <div className="container-info">
            <div className="user">
              <div className="userIcon">
                <span className="logo">
                  <img src={Avtar} alt="avtar" />
                </span>
              </div>
              <div className="userInfo">
                <h5>
                  Carlota Monteiro
                  <br />
                  <strong className="subtitle">Admin</strong>{" "}
                </h5>
              </div>
            </div>
          </div>
          <h3 className="sidebarTitle">GENERAL</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <SpeedIcon />
              &nbsp;&nbsp;&nbsp;App
            </li>
            <li className="sidebarListItem">
              <ShoppingBagIcon />
              &nbsp;&nbsp;&nbsp;E-commerce
            </li>
            <li className="sidebarListItem">
              <TimelineIcon />
              &nbsp;&nbsp;&nbsp;Analytics
            </li>
            <li className="sidebarListItem">
              <AccountBalanceIcon />
              &nbsp;&nbsp;&nbsp;Banking
            </li>
            <li className="sidebarListItem">
              <CalendarMonthIcon />
              &nbsp;&nbsp;&nbsp;Booking
            </li>
          </ul>

          <h3 className="sidebarTitle">MANAGEMENT</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PersonIcon />
              &nbsp;&nbsp;&nbsp;Users
            </li>
            <li className="sidebarListItem">
              <ShoppingCartIcon />
              &nbsp;&nbsp;&nbsp;E-commerce
            </li>
            <li className="sidebarListItem">
              <span className="logo">
                <img src={Blog} alt="avtar" />
              </span>
              &nbsp;&nbsp;&nbsp;Blog
            </li>
          </ul>

          <h3 className="sidebarTitle">APPS</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailIcon />
              &nbsp;&nbsp;&nbsp;Mail
            </li>
            <li className="sidebarListItem">
              <ForumIcon />
              &nbsp;&nbsp;&nbsp;Chat
            </li>
            <li className="sidebarListItem">
              <CalendarMonthIcon />
              &nbsp;&nbsp;&nbsp;Calender
            </li>
            <li className="sidebarListItem">
              <ComputerIcon />
              &nbsp;&nbsp;&nbsp;Kanban
            </li>
          </ul>
          <div className="sidebarBottom">
            <span className="logo">
              <img src={Sb} alt="sb" />
            </span>
            <h4>Hi, Carlota Monteiro</h4>
            <p>Need help, <br/>Please check our docs</p>
            <button className="btn">Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
