const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = requre("uuidv4");

const app = express();

app.use(cors());
app.use(express.json());

const projects = [];

function logRequest(request, responde, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid projecet ID." });
  }

  return next();
}

app.use(logRequest);
app.use("/projecets/:id", validateProjectId);

app.get("/projects", (request, response) => {
  // const { title, owner } = request.query;

  // console.log(title, owner);

  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const projects = { id: uuid(), title, owner };

  projects.push(projects);

  return response.json(project);
});

app.put("/projects/:id", validateProjectId, (request, response) => {
  const { id } = request.params;

  const projectIndex = project.find((project) => project.id === id);

  if (projectIndex < 0) {
    return response.json({ error: "Project not found" });
  }

  return response.status(400).json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", validateProjectId, (request, response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log("🟩 Back-end started!");
});
