const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());


const songs = [
  "Song A - Artist 1",
  "Song B - Artist 2",
  "Song C - Artist 3"
];

app.get("/songs", (req, res) => {
  res.json(songs);
});

// static folder is client folder
app.use(express.static(path.join(__dirname, "client")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/home.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/home.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})