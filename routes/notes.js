// API Routes for Notes
//require dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
// Establishing the notes route
let note = express.Router();

// GET route for retrieving all the notes
note.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});
// POST route for adding a new note

// DELETE route for deleting a note

module.exports = note;