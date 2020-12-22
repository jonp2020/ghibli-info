import React from "react";
import { Link } from "@reach/router";

const IndividualCharacters = ({ character, films }) => {
  const filmIdArray = [];
  const filmTitlesArray = [];
  const urlRegex = /films.*/;

  const filmIds = character.films;

  filmIds.forEach((id, i) => {
    const matchId = character.films[i].match(urlRegex);
    filmIdArray.push(matchId[0].slice(6));
  });

  filmIdArray.forEach((id) => {
    films.forEach((film) => {
      if (film.id === id) filmTitlesArray.push(film.title);
    });
  });

  const appearsIn = filmTitlesArray.map((name, i) => {
    const filmTitle = name.replace(/\s/g, "_");
    return (
      <Link
        className="indi-film-link"
        to={`/films/${filmTitle}`}
        state={filmIdArray[i]}
      >
        <strong>{name}</strong>
      </Link>
    );
  });

  return (
    <div className="individual-character-wrapper">
      <div></div>
      <img src="http://placehold.it/100x100" alt={character.name} />
      <h1>{character.name}</h1>
      <div className="character-desccription">
        <p>Age: {character.age ? character.age : "Unknown"}</p>
        <p>Hair color: {character.hair_color}</p>
        <p>Eye color: {character.eye_color}</p>
        <p className="appears-in">Appears in:</p>
        {appearsIn}
      </div>
    </div>
  );
};

export default IndividualCharacters;
