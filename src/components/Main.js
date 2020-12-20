import React from "react";
import { Router, Link } from "@reach/router";
import FilmCards from "./FilmCards";
import ImageBackground from "./ImageBackground";

import Film from "./Film";

const Main = () => {
  return (
    <main
      className={`main-container`}
      // onScroll={() => console.log("scroll in main container")}
    >
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
      <div
        className="router-container"
        onScroll={() =>
          console.log("scroll in main container router container")
        }
      >
        <Router
          className="router-wrapper"
          primary={false}
          onScroll={() => console.log("scroll in main")}
        >
          <FilmCards path="/films" />
          <Film path="/films/:filmTitle" />
        </Router>
      </div>
    </main>
  );
};

export default Main;
