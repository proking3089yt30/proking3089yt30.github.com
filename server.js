// server.js

const express = require('express');
const request = require('request');
const apiKey = '53984a0563fb3875b9b3a67fb22e5305'; // Replace with your actual API key

const app = express();

// Define routes and handle requests
app.get('/', (req, res) => {
  res.send('Welcome to the Proking3089yt30 GitHub Server');
});

app.get('/data', (req, res) => {
  const url = `https://api.example.com/data?apiKey=${apiKey}`; // Replace with the actual API endpoint

  // Make a request to the API using the apiKey
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.json(data);
    } else {
      res.status(response.statusCode).send(error);
    }
  });
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
