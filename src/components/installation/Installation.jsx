import "./installation.css";
// import Cd from "../images/cd.png";
// import Ti from "../images/ti.png";
// import Card from "../Cards/Card";
import Chart from "react-apexcharts";

const chartOptions = {
  series: [
    {
      name: "Asia",
      data: [30, 35, 40, 80, 85, 100, 85, 82, 76],
      color: "#00AB55",
    },
    {
      name: "America",
      data: [40, 80, 70, 60, 40, 25, 37, 15, 10],
      color: "#ffbf00",
    },
  ],
  options: {
    chart: {
      background: "transparent",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
        tools: {
          download: false,
        },
      },
      animations: {
        id: "realtime",
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    title: {
      text: "Total Installed",
      align: "left",
    },
    subtitle: {
      text: "(+43%) than last year",
      align: "left",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      show: true,
    },
  },
};


const series = [44, 55, 41, 17];
const options = {
  title: {
    text: "Current Downloads ",
    align: "left",
    margin:50
  },
  series:[44, 55, 41, 17],
  labels:["Mac", "Windows", "iOS", "Android"],
  position:"bottom",
  colors:["#C8FACD","#5BE584","#00AB55","#007B55"],
  dataLabels:{
    enabled:false
  },
  plotOptions:{
    pie:{
      expandOnClick:false,
      donut:{
        size:"80px",
        labels:{
        show:true,
          total:{
            show:true,
            showAlways:false,
            fontSize:"24px",
            color:"#2787AB"
          }
        }
      }
    }
  }
};

function Installation() {
  return (
    <div className="installation">
      <div className="installLeft">
        <Chart   
          options={options}
          series={series}
          type="donut"
          height="100%"
          width="100%"
        />
      </div>
      <div className="installRight">
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="line"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
}

export default Installation;
