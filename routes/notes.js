// API Routes for Notes
//require dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// Establishing the notes route
let note = express.Router();

// GET route for retrieving all the notes
note.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});
// POST route for adding a new note as json data
note.post('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        // Create a new note object with the data received from the client
        const newNote = {
            id: uuidv4(), // Use uuid to generate a unique id
            title: req.body.title,
            text: req.body.text,
        };

        // Add the new note to the existing notes array
        notes.push(newNote);

        // Write the updated notes back to the JSON file
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});
// DELETE route for deleting a note by ID

module.exports = note;