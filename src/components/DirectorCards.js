import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import IndividualDirectors from "./IndividualDirectors";

const DirectorCards = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    const getDirectors = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films");
        const data = res.data;
        setFilmData(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };
    getDirectors();
  }, []);

  const directorsAndFilms = {};
  const directors = [];

  if (!loading) {
    filmData.forEach((film) => {
      if (!directorsAndFilms[film.director]) {
        directors.push(film.director);
        directorsAndFilms[film.director] = [
          `${film.title} (${film.release_date})`,
        ];
      } else {
        directorsAndFilms[film.director].push(
          `${film.title} (${film.release_date})`
        );
      }
    });
  }

  if (loading) return "loading";

  return (
    <div className="indi-directors-container">
      {directors.map((director, i) => {
        return (
          <IndividualDirectors
            key={i}
            director={directors[i]}
            directorsAndFilms={directorsAndFilms}
            films={filmData}
          />
        );
      })}
    </div>
  );
};

export default DirectorCards;
