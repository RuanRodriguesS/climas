import React from "react";
import WeatherDetails from "../../components/WheaterDetails";

const WeatherDetailsPage = () => {
  const apiKey = "aa6b9cddc95770b2245ed3224479e1e7"; 

  return (
    <div>
      <WeatherDetails apiKey={apiKey} />
    </div>
  );
};

export default WeatherDetailsPage;
