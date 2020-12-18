import { logDOM } from "@testing-library/react";
import React from "react";

const IndividualFilms = ({ film }) => {
  // console.log("indi films ", film);
  return (
    <div className="indi-film-container">
      <img src="http://placehold.it/100x100" alt="" />
      <h1>{film.title}</h1>
      <p>Year: {film.release_date}</p>
      <p>Dir: {film.director}</p>
    </div>
  );
};

export default IndividualFilms;
