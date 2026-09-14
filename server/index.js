const express = require('express');
const cors = require('cors');
require('dotenv').config();

const projects = require('./data/projects');

const app = express();

// B7: Enable CORS and parse JSON bodies
app.use(cors());
app.use(express.json());

// In-memory storage for B4 and B5
const contactSubmissions = [];

// B1: Health Check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// B2: Serve all projects
app.get('/api/projects', (req, res) => {
  res.status(200).json(projects);
});

// B3: Serve a single project by ID
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  
  if (!project) {
    // Must return JSON, not an HTML error page
    return res.status(404).json({ error: 'Project not found' });
  }
  
  res.status(200).json(project);
});


// B4: Handle Contact Form Submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Server-side validation
  if (!name) return res.status(400).json({ error: 'Name is required' });
  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!message) return res.status(400).json({ error: 'Message is required' });

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Persist valid submission
  const newSubmission = { 
    id: Date.now(), 
    name, 
    email, 
    message, 
    timestamp: new Date().toISOString() 
  };
  contactSubmissions.push(newSubmission);
  console.log(contactSubmissions.length);
  for (let x of contactSubmissions) {
      console.log(x.id);
      console.log(x.name);
      console.log(x.email);
      console.log(x.message);
      console.log(x.timestamp);
  }
  res.status(201).json({ 
    success: true, 
    message: 'Submission received successfully', 
    data: newSubmission 
  });
});

// B5: List all contact submissions (for verification)
app.get('/api/contact', (req, res) => {
  res.status(200).json(contactSubmissions);
});

// B6: Centralized 404 Handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// B6: Global Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});