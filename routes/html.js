// Routes for the HTML pages
// require dependencies
const router = require('express').Router();
const path = require('path');

// Establishing the route for the index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Establishing the route for the notes.html page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;