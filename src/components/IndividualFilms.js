import { useState } from "react";
import { Link } from "@reach/router";

const IndividualFilms = ({ film }) => {
  const [indiFilm] = useState(film);
  const filmTitle = film.title.replace(/\s/g, "_");
  // console.log("indi film 1 ", film);

  const handleScroll = () => {
    console.log("hello0000");
  };

  return (
    <div className="indi-film-container" onScroll={handleScroll}>
      <img src="http://placehold.it/100x100" alt="" />
      <h1>{film.title}</h1>
      <p>Year: {film.release_date}</p>
      <p>Dir: {film.director}</p>
      <Link
        className="more-info-film-btn"
        film={indiFilm}
        to={`/films/${filmTitle}`}
        state={film.id}
      >
        More info
      </Link>
    </div>
  );
};

export default IndividualFilms;
