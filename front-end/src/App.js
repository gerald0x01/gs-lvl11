import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/background.jpg";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "App Development",
    "Web Front-End",
  ]);
  // UseState retorna um array com 2 posições.
  // 1. Variável com o seu valor inicial.
  // 2. Função para atualizarmos esse valor.

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <img src={backgroundImage}></img>

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
