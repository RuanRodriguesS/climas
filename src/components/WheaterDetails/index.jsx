import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

const WeatherDetails = ({ apiKey }) => {
  const { id } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apiKey}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhe de climas:", error);
      }
    };

    fetchWeather();
  }, [id, apiKey]);

  return (
    <div>
      <h2>Detalhes do clima</h2>
      {weather && (
        <div>
          <p>Cidade: {weather.name}</p>
          <p>Temperatura: {kelvinToCelsius(weather.main.temp).toFixed(2)}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
