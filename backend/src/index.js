const express = require("express");

const app = express();

app.get("/projects", (response) => {
  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log("🟩 Back-end started!");
});
