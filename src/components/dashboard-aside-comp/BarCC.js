import "./bar.css";
import BarChart from "react-bar-chart";

export default function BarCC() {
  const data = [
    { text: "Valid", value: 500 },
    { text: "Neutral", value: 340 },
    { text: "Invalid", value: 100 }
  ];
  const color = { color: "blue" };
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const handleBarClick = (element) => {
    console.log(`The  ${element.text} with value ${element.value} was clicked`);
  };
  return (
    <div className="bar-header">
        <div className="text-center">
            <h4>Graphical Summary of the conversation Feedbacks</h4>
            <p>This shows support for your proposed solution</p>
        </div>
      <div style={{ width: "100%" }} className="d-flex justify-content-center align-items-center" >
        <BarChart
          ylabel="Quantity"
          width={400}
          height={400}
          margin={margin}
          data={data}
          color={color}
          onBarClick={handleBarClick}
        />
      </div>
      <div className="d-flex justify-content-center feed-option">
        <div className="d-flex justify-content-center gap-15">
            <div className="feed-circle feed-blue "></div>
            <p>Option A</p>
        </div>
        <div className="d-flex justify-content-center gap-15">
            <div className="feed-circle feed-yellow"></div>
            <p>Option B</p>
        </div>
        <div className="d-flex justify-content-center gap-15">
            <div className="feed-circle feed-gray"></div>
            <p>Option C</p>
        </div>
      </div>
    </div>
  );
}
