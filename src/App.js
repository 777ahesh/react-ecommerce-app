import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./components/pages/Home";
import Welcome from "./components/welcome/Welcome";
import Installation from "./components/installation/Installation";
import Order from "./components/order/Order";
import Final from "./components/final/Final";
function App() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="others">
          <Topbar />
          <Welcome/>
          <Home/>
          <Installation/>
          <Order/>
          <Final/>
        </div>
      </div>
    </div>
  );
}

export default App;
