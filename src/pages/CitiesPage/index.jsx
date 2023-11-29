import React from "react";
import CityList from "../../components/CityList";

const CitiesPage = () => {
  return (
    <div>
      <CityList
        title="Página de cidades"
        welcomeMessage="Descubra o clima de diferentes cidades"
      />
    </div>
  );
};

export default CitiesPage;
