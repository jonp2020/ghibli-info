import React from "react";
import { Router, Link } from "@reach/router";
import FilmCards from "./FilmCards";
import ImageBackground from "./ImageBackground";
import Film from "./Film";
import CharacterCards from "./CharacterCards";
import DirectorCards from "./DirectorCards";
import VehiclesCards from "./VehiclesCards";

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
          <li>
            <Link className="nav-links" to="/directors">
              Directors
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/characters">
              Characters
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/vehicles">
              Vehicles
            </Link>
          </li>
          <li>Themes</li>
        </ul>
      </div>
      <div className="router-container">
        <Router className="router-wrapper" primary={false}>
          <FilmCards path="/films" />
          <Film path="/films/:filmTitle" />
          <CharacterCards path="/characters" />
          <DirectorCards path="/directors" />
          <VehiclesCards path="/vehicles" />
        </Router>
      </div>
    </main>
  );
};

export default Main;
