const express = require('express');
const path = require('path');

var port = process.env.PORT || 3000;
var app = express();

const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'node_modules')));

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});


app.listen(port);
console.log(`app running on port ${port}`);