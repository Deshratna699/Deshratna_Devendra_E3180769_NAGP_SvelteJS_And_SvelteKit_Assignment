const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5184;

app.use(cors({ origin: 'http://localhost:5173/', credentials: true }));
app.use(bodyParser.json());

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

app.use(cors({ origin: 'http://localhost:5173/', credentials: true }));
app.use(bodyParser.json());

const users = {
  'user@example.com': 'password', // Sample user for testing
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (users[email] && users[email] === password) {
    res.status(200).json({ token: 'fake-jwt-token', user: { email } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
