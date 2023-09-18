// API Routes for Notes
//require dependencies
const express = require('express');
let router = express.Router();

const notes = [];

// GET route for retrieving all the notes
router.get('/api/notes', (req, res) => {
    const noteData = fs.readFileSync(dbFilePath, 'utf8');
    const notes = JSON.parse(noteData);

    res.json(notes);
});

module.exports = router;