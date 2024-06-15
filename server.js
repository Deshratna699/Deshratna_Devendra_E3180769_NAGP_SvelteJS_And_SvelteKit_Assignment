const express = require('express');
const app = express();
const port = 3000;

let tasks = [
  { id: 1, title: "Task 1", description: "Description 1", dueDate: "2023-12-31", category: "Work", priority: 1 },
  { id: 2, title: "Task 2", description: "Description 2", dueDate: "2024-01-15", category: "Personal", priority: 2 },
  // Add more tasks as needed
];

app.use(express.json());

app.get('/api/tasks', (req, res) => {
  const category = req.query.category;
  if (category) {
    const filteredTasks = tasks.filter(task => task.category === category);
    res.json(filteredTasks);
  } else {
    res.json(tasks);
  }
});

app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(task => task.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
