// Require dependencies
const express = require('express');
const path = require('path');
const notes = require('./routes/notes')

// Create an instance of express
const app = express();

// Define the port to run on
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.json());

// Mount the router at /notes
app.use("/notes", notes);

// Middleware to serce static files
app.use(express.static('public'));

// Start the server on the port
app.listen(PORT, () => console.log(`Booting up on PORT: ${PORT}`));