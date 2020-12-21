import React from "react";

const IndividualCharacters = ({ character, films }) => {
  // console.log("film characters data", character);

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

  const appearsIn = filmTitlesArray.map((name) => {
    return (
      <p>
        <strong>{name}</strong>
      </p>
    );
  });

  // console.log("filmIdArray", filmIdArray);

  return (
    <div className="individual-character-wrapper">
      <div></div>
      <img src="http://placehold.it/100x100" alt={character.name} />
      <h1>{character.name}</h1>
      <div className="character-desccription">
        <p>Age: {character.age}</p>
        <p>Hair color: {character.hair_color}</p>
        <p>Eye color: {character.eye_color}</p>
      </div>
      <p className="appears-in">Appears in:</p>
      {appearsIn}
    </div>
  );
};

export default IndividualCharacters;
