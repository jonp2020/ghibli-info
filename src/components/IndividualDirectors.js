import React from "react";
import { Link } from "@reach/router";

const IndividualDirectors = ({ director, directorsAndFilms, films }) => {
  const film = directorsAndFilms[director];
  const filmIds = {};

  film.forEach((film, i) => {
    const filmTitle = film.slice(0, -7);
    const match = films.find((title) => {
      return title.title === filmTitle;
    });
    filmIds[filmTitle] = match.id;
  });

  const listOfFilms = film.map((item, i) => {
    const filmTitle = item.replace(/\s/g, "_");

    return (
      <Link
        key={i}
        className="indi-film-link"
        to={`/films/${filmTitle.slice(0, -7)}`}
        state={filmIds[item.slice(0, -7)]}
      >
        {item}
      </Link>
    );
  });

  return (
    <div className="indi-director-wrapper">
      <img src="http://placehold.it/100x100" alt="placeholder" />
      <h1>{director}</h1>
      <p>
        <strong>Films directed:</strong>
      </p>
      {listOfFilms}
    </div>
  );
};

export default IndividualDirectors;
