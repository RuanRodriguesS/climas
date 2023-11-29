import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Bem-vindo à nossa aplicação de previsão do tempo!</p>
      <Link to={"/cities"}>Cidades</Link>
    </div>
  );
};

export default Home;
