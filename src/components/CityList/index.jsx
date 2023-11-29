import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CityList = ({ title, welcomeMessage }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cityIds = ["London", "Petrópolis, BR", "Moscow", "Texas"];
        const apiKey = "aa6b9cddc95770b2245ed3224479e1e7";

        const promises = cityIds.map(async (cityId) => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${apiKey}`
          );
          return response.data;
        });

        const citiesData = await Promise.all(promises);
        setCities(citiesData);
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <p>{welcomeMessage}</p>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/city/${city.name}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
