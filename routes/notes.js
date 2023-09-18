// API Routes for Notes
//require dependencies
const express = require('express');
let router = express.Router();

const notes = [];

// GET route for retrieving all the notes
router.get('/', (req, res) => {
    res.json(notes);
});

module.exports = router;