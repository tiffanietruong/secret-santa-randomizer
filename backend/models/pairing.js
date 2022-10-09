const mongoose = require('mongoose');

const pairingSchema = new mongoose.Schema({
    year: {
        type: String, /* to convert to Date manually */
        required: true
    },
    santa: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    santee: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const Pairing = mongoose.model('Pairing', pairingSchema);

module.exports = Pairing;