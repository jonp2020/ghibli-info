import React from "react";
import { Router, Link } from "@reach/router";
import FilmCards from "./FilmCards";
import ImageBackground from "./ImageBackground";

import Film from "./Film";

const Main = () => {
  return (
    <main className={`main-container`}>
      <ImageBackground />
      <div className="nav-container">
        <ul className="nav-list-wrapper">
          <li>
            <Link className="nav-links" to="/films">
              Films
            </Link>
          </li>
          <li>Directors</li>
          <li>Characters</li>
          <li>Vehicles</li>
          <li>Themes</li>
        </ul>
      </div>
      <Router primary={false}>
        <FilmCards path="/films" />
        <Film path="/films/:film_id" />
      </Router>
    </main>
  );
};

export default Main;
