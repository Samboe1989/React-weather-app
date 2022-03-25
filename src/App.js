import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Barcelona" />
        <footer>
          This project was coded by Samantha Boersma and is
          <a
            class="bottomlink"
            href="https://github.com/Samboe1989/React-weather-app"
            target="_blank"
            rel="noreferrer"
            title="Github page"
          >
            {""} open-Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
