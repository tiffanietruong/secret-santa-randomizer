const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@secretsantarandomizercl.dbukcdx.mongodb.net/data?retryWrites=true&w=majority`;

const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
};

mongoose.connect(mongoURI, options)
    .then(() => {
        console.log("Successfully connected to mongoDB.")
    })
    .catch(() => {
        console.log('Error connecting to mongoDB. Timeout reached.')
    });

module.exports = { mongoose } 