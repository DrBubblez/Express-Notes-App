// Require dependencies
const express = require('express');
const path = require('path');

// Importing API routes
const api = require('./api/notes.js');

// Linking the database
const noteData = require('./db/db.json');

// Setting up the port
const PORT = 3001;

// Create an instance of express
const app = express();

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static('public'));

// Send requests with the /api endpoint to the api routes
app.use('/api', api);

// View route for the home page
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// View route for the notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Start the server on the port
app.listen(PORT, () => console.log(`Booting up on PORT: ${PORT}`));