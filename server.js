// Require dependencies
const express = require('express');
const path = require('path');

// Importing API routes
const note_api = require('./routes/notes.js');
const html_routes = require('./routes/html.js');

// Setting up the port
const PORT = process.env.PORT || 3001;

// Create an instance of express
const app = express();

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static('public'));

// Establishing the routes
app.use(html_routes);
app.use(note_api);

// Start the server on the port
app.listen(PORT, () => console.log(`Booting up on PORT: ${PORT}`));