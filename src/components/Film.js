import axios from "axios";
import { useEffect, useState } from "react";

const Film = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [singleFilmData, setSingleFilmData] = useState(null);

  const propsState = props.location.state;
  const entries = Object.entries(propsState);
  let filmId = "";
  entries.forEach((key) => (key[0] !== "key" ? (filmId += key[1]) : null));

  useEffect(() => {
    getFilm();
  }, []);

  async function getFilm() {
    setLoading(true);
    setError(false);

    try {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${filmId}`
      );

      setSingleFilmData(res.data);
    } catch (error) {
      setError(true);
      console.log(error);
      setError(true);
    }
    setLoading(false);
  }

  if (loading) return "Loading";
  console.log("singleFilmData", singleFilmData);

  return (
    <article className="single-film-info-container">
      <div className="single-film-wrapper">
        <div className="single-film-info-title-wrapper">
          <img src="http://placehold.it/200x250" alt="placeholder" />
          <div className="single-film-title-year-dir">
            <h1>{singleFilmData.title}</h1>
            <p>Year: {singleFilmData.release_date}</p>
            <p>Director: {singleFilmData.director}</p>
          </div>
        </div>
        <p className="single-film-info-description">
          <strong>Story:</strong> <br />
          {singleFilmData.description}
        </p>
        <div className="single-film-info-imgs-container">
          <img src="http://placehold.it/150x100" alt="placeholder" />
          <img src="http://placehold.it/150x100" alt="placeholder" />
          <img src="http://placehold.it/150x100" alt="placeholder" />
        </div>
      </div>
    </article>
  );
};

export default Film;
