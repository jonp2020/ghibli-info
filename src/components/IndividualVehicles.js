import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const IndividualVehicles = ({ vehicle }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const getFilm = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await axios.get(`${vehicle.films}`);
        const data = res.data;
        setFilm(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };

    getFilm();
  }, []);

  if (loading) return null;

  const filmTitle = film.title.replace(/\s/g, "_");
  return (
    <div className="indi-vehicles-wrapper">
      <img src="http://placehold.it/100x100" alt="placeholder" />
      <h1>{vehicle.name}</h1>
      <p>
        <strong>Type: </strong>
        {vehicle.vehicle_class}
      </p>
      <p>
        <strong>Description: </strong>
        {vehicle.description}
      </p>
      <p>
        <strong>Appears in: </strong>
        <Link
          className="indi-film-link"
          to={`/films/${filmTitle}`}
          state={film.id}
        >
          {film.title}
        </Link>
      </p>
    </div>
  );
};

export default IndividualVehicles;
