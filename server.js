/**
 * Created by sesha on 6/2/17.
 */


// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

/* Mongodb    */
// var connectionString = 'mongodb://127.0.0.1:27017/taportal';
var connectionString = 'mongodb://webappmaker:webappmaker@ds163181.mlab.com:63181/webappmaker';
var mongoose = require("mongoose");
mongoose.connect(connectionString);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist -- For building
// app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// For Build: When we build, we serve this for dist
const api = require('./server/routes/api');

// Set our api routes
app.use('/api', api);

// For Build: Catch all other routes and return the index file
// app.get('*', function (req, res) {
//   const index = path.join(__dirname, 'dist', 'index.html');
//   res.sendFile(index);
// });


// Get port from environment and store in Express.
const port = '9000' ;
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);


// Server side API
var serverSide = require('./server/app');
serverSide(app);


var PPORT = process.env.PORT || port;
//Listen on provided port, on all network interfaces.
server.listen(PPORT , () => console.log(`API running on localhost:${port}`)); //-- working on heroku
//server.listen(port , () => console.log(`API running on localhost:${port}`)); //-- working on LocalHost

