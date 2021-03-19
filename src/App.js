import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Reston" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/sarah-jankosky-7a657b59/"
            target="_blank"
            rel="noreferrer"
          >
            Sarah Jankosky
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sjankosky/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
