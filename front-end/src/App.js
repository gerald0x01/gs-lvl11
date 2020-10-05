import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "App Development",
    "Web Front-End",
  ]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProject(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post("projects", {});

    const project = response.data;

    setProjects([...projects, project]);
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
