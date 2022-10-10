'use strict';

const express = require('express');
const app = express();
const http = require('http');
require('dotenv').config();

/**
 * MongoDB Connection
 */
const { mongoose } = require('./db/mongoose');

/**
 * Middleware
 */
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Routes
 */
const adminRouter = require('./routes/admin');
app.use('/api/admin', adminRouter);

const pairingRouter = require('./routes/pairings');
app.use('/api/pairing', pairingRouter);

const userRouter = require('./routes/users');
app.use('/api/user', userRouter);

/**
 * Listen for requests 
 */
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

module.exports = {mongoose}