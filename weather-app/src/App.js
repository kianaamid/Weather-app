import "./App.css";
import DefaultHomePageImage from "./images/home-page.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${DefaultHomePageImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "940px",
      }}
    ></div>
  );
}

export default App;
