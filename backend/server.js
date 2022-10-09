'use strict';

const express = require('express');
const app = express();
const http = require('http');

/**
 * MongoDB Connection
 */
const { mongoose } = require('./db/mongoose');

/**
 * Middleware
 */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Routes
 */
const pairingRouter = require('./routes/pairings');
app.use('/api/pairing', pairingRouter);

/**
 * Listen for requests 
 */
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

module.exports = {mongoose}