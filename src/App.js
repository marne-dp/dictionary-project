import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="chocolate" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Marné du Preez and is open-sourced on{" "}
            <a
              href="https://github.com/marne-dp/dictionary-project"
              rel="noreferrer noopener"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://sweet-semifreddo-2a1c2a.netlify.app/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
