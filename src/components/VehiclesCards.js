import { useState, useEffect } from "react";
import axios from "axios";
import IndividualVehicles from "./IndividualVehicles";

const VehiclesCards = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [vehiclesData, setVehiclesData] = useState(null);

  useEffect(() => {
    const getVehicles = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/vehicles");
        const data = res.data;
        setVehiclesData(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    };
    getVehicles();
  }, []);

  if (loading) {
    return "loading";
  }
  return (
    <div className="indi-vehicles-container">
      {vehiclesData.map((vehicle, i) => {
        return <IndividualVehicles key={i} vehicle={vehicle} />;
      })}
    </div>
  );
};

export default VehiclesCards;
