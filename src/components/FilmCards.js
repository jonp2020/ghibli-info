import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import IndividualFilms from "./IndividualFilms";
import SearchBar from "./SearchBar";

const FilmCards = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      setLoading(true);
      setError(false);
      try {
        console.log("here in getFilms");
        const res = await axios.get("https://ghibliapi.herokuapp.com/films");

        console.log("res data", res.data);

        setFilmData(res.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    getFilms();
  }, []);

  if (loading) return "Loading...";
  return (
    <>
      <SearchBar />
      <div className="film-card-container">
        {filmData.map((film) => {
          return <IndividualFilms key={film.id} film={film} />;
        })}
      </div>
    </>
  );
};

export default FilmCards;
