/**
 * Router for serving requests for static pages
*/

const express = require('express');
const fs = require('fs');

const router = express.Router();

const wrapJson = function(fileName) {
    const buffer = fs.readFileSync(fileName);
    return {text: buffer.toString()};
} 

router.get('/what', function(req, res) {
    res.json(wrapJson('./static/what.md'));
});

router.get('/privacy', function(req, res) {
    res.json(wrapJson('./static/privacy.md'));
});

router.get('/terms', function(req, res) {
    res.json(wrapJson('./static/terms.md'));
});

module.exports = router;