/* Pairings API */
/* Server-side logic related to Secret Santa pairings */

const express = require('express');
const router = express.Router();

const Pairing = require("../models/pairing");

/****************** POST ROUTES ******************/

// Adds a new Pairing object to the database
router.post('/', async (req, res) => {
    const year = req.body.year;
    const santa = req.body.santa;
    const santee = req.body.santee;

    const pairing = new Pairing({
        year: year,
        santa: santa,
        santee: santee
    });

    console.log(pairing);
    // TODO: update with more descriptive error cases
    try {
        const result = await pairing.save()
        res.send(result)
    }
    catch (e) {
        console.log("ERROR - ", e);
        res.status(500).send();
    }
});

module.exports = router;
