import React from "react";

const IndividualFilms = ({ film }) => {
  console.log("indi films ", film);

  const handleClick = (e) => {};
  return (
    <div className="indi-film-container">
      <img src="http://placehold.it/100x100" alt="" />
      <h1>{film.title}</h1>
      <p>Year: {film.release_date}</p>
      <p>Dir: {film.director}</p>
      <button className="more-info-film-btn" film={film} onClick={handleClick}>
        More info
      </button>
    </div>
  );
};

export default IndividualFilms;
