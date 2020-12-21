import { useState, useEffect } from "react";
import axios from "axios";
import IndividualCharacters from "./IndividualCharacters";

const CharacterCards = () => {
  const [characterData, setCharacterData] = useState(null);
  const [filmData, setFilmData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);

      try {
        const resChars = await axios("https://ghibliapi.herokuapp.com/people");
        const resFilms = await axios("https://ghibliapi.herokuapp.com/films");

        const dataChars = resChars.data;
        const dataFilms = resFilms.data;

        setCharacterData(dataChars);
        setFilmData(dataFilms);

        setLoading(false);
        console.log("character data ", dataChars);
        console.log("film data ", dataFilms);
      } catch (error) {
        console.log(error);
      }
    };

    getCharacters();
  }, []);

  if (loading) return "Loading...";
  return (
    <div className="indi-character-cards-container">
      {characterData.map((character) => {
        return (
          <IndividualCharacters
            key="character.id"
            character={character}
            films={filmData}
          />
        );
      })}
    </div>
  );
};

export default CharacterCards;
