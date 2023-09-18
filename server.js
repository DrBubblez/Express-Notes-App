// Require dependencies
const express = require('express');
const path = require('path');

// Create an instance of express
const app = express();

// Define the port to run on
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON data
app.use(express.json());

// Middleware to serce static files
app.use(express.static('public'));

// API routes
// GET route for notes
app.get('/api/notes', (req, res) => {})

// POST route for notes
app.post('/api/notes', (req, res) => {})

// DELETE route for notes
app.delete('/api/notes/:id', (req, res) => {})

// Start the server on the port
app.listen(PORT, () => console.log(`Booting up on PORT: ${PORT}`));