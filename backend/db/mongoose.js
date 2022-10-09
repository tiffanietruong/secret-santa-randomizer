const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://tiffanietruong:nXVQwnzG4B5tO7Ng@secretsantarandomizercl.dbukcdx.mongodb.net/data?retryWrites=true&w=majority";

// Options argument used when connecting to mongoose
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

// Export the active connection 
module.exports = { mongoose } 