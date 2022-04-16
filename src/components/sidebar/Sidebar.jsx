import "./sidebar.css";
import Avtar from "../images/avatar.png";
import Blog from "../images/blog.png";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SpeedIcon from '@mui/icons-material/Speed';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="container-info">  
          <div className="user">
            <div className="userIcon">
              <span className="logo">
                <img src={Avtar} alt="avtar" />
              </span>
            </div>
            <div className="userInfo">
              <h5>Carlota Monteiro<br/><strong className="subtitle">Admin</strong> </h5>    
            </div>
          </div>
          </div>
          <h3 className="sidebarTitle">General</h3>
          <ul className="sidebarList">
              <li className="sidebarListItem active">
                <SpeedIcon/>&nbsp;&nbsp;&nbsp;App
              </li>
              <li className="sidebarListItem">
                <ShoppingBagIcon/>&nbsp;&nbsp;&nbsp;E-commerce
              </li>
              <li className="sidebarListItem">
                <TimelineIcon/>&nbsp;&nbsp;&nbsp;Analytics
              </li>
              <li className="sidebarListItem">
                <AccountBalanceIcon/>&nbsp;&nbsp;&nbsp;Banking
              </li>
              <li className="sidebarListItem">
                <CalendarMonthIcon/>&nbsp;&nbsp;&nbsp;Booking
              </li>
          </ul>

          <h3 className="sidebarTitle">Management</h3>
          <ul className="sidebarList">
              <li className="sidebarListItem active">
                <PersonIcon/>&nbsp;&nbsp;&nbsp;Users
              </li>
              <li className="sidebarListItem">
                <ShoppingCartIcon/>&nbsp;&nbsp;&nbsp;E-commerce
              </li>
              <li className="sidebarListItem">
              <span className="logo">
                <img src={Blog} alt="avtar" />
              </span>&nbsp;&nbsp;&nbsp;Blog
              </li>
             
          </ul>  

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
