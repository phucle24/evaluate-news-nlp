const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

// Load environment variables
dotenv.config({ path: "./src/.env" });

// Initialize express app
const app = express();

// Middleware
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Environment variables
const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

console.log(`Your API key is ${apiKey}`);

// Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'));
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/add', async (req, res) => {
    try {
        const response = await fetch(`${baseURL}?key=${apiKey}&lang=auto&url=${req.body.url}`);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log("Something went wrong!!", error);
    }
});

// Start the server
app.listen(8001, function () {
    console.log(`Evaluate news NLP listening on port 8001`);
});
