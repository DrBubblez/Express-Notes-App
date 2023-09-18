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
// POST route for adding a new note as json data
note.post('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        let newNote = req.body;
        newNote.id = notes.length + 1;
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});
// DELETE route for deleting a note

module.exports = note;