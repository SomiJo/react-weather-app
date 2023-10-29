import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This App was coded by Somaye Jodeir and is{" "}
          <a
            href="https://github.com/SomiJo/react-weather-app.git"
            target="_blank">
            open_source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
