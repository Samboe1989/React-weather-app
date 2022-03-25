import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />
        <footer>
          This project was coded by Samantha Boersma and is
          <a
            className="bottomlink"
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
