const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let tasks = [
  {
    id: 1,
    title: "Learn Azure CI/CD pipeline",
    completed: false
  },
  {
    id: 2,
    title: "Containerize app using Docker",
    completed: false
  }
];

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "CodeAlpha Azure CI/CD Task Manager",
    version: "1.0.0"
  });
});

app.get("/api/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Task title is required"
    });
  }

  const newTask = {
    id: Date.now(),
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.patch("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  task.completed = !task.completed;

  res.status(200).json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const taskExists = tasks.some((item) => item.id === taskId);

  if (!taskExists) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  tasks = tasks.filter((item) => item.id !== taskId);

  res.status(200).json({
    message: "Task deleted successfully"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Task Manager app is running on port ${PORT}`);
  });
}

module.exports = app;