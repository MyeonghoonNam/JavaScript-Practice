import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import findIndex from "lodash.findindex";

const PORT = 8080;
let TODOS = [];

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/api/todos", (_, res) => {
  res.send(TODOS);
});

app.post("/api/todos", (req, res) => {
  const newTodo = {
    completed: false,
    ...req.body,
    id: uuidv4(),
  };

  TODOS.push(newTodo);

  res.status(201);
  res.send(newTodo);
});

app.patch("/api/todos/:id", (req, res) => {
  const updateTodoIndex = findIndex(TODOS, (todo) => todo.id === req.params.id);
  const oldTodo = TODOS[updateTodoIndex];
  const newTodo = {
    ...oldTodo,
    ...req.body,
  };

  TODOS[updateTodoIndex] = newTodo;
  res.send(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  TODOS = TODOS.filter((todo) => todo.id !== req.params.id);

  res.status(204);
  res.send();
});

app.listen(PORT);
