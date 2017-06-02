/**
 * Created by sesha on 6/2/17.
 */


// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


// Get our API routes
const api = require('./server/routes/api');


var app = express();

/*                          Mongodb                           */
// var connectionString = 'mongodb://127.0.0.1:27017/taportal';
var connectionString = 'mongodb://webappmaker:webappmaker@ds163181.mlab.com:63181/webappmaker';
var mongoose = require("mongoose");
mongoose.connect(connectionString);


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */

const port = '9000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


// Database server side
var serverSide = require('./server/app');
serverSide(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
