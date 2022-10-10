/* Pairings API */
/* Server-side logic related to Secret Santa pairings */

const express = require('express');
const router = express.Router();

const Pairing = require("../models/pairing");

/****************** POST ROUTES ******************/

// Adds a new Pairing to the database
router.post('/', async (req, res) => {
    const year = req.body.year;
    const santa = req.body.santa;
    const santee = req.body.santee;

    const pairing = new Pairing({
        year: year,
        santa: santa,
        santee: santee
    });

    try {
        const existingPairing = await Pairing.findOne({ year: year, santa: santa });
        if (existingPairing) {
            res.status(400).send(`A pairing with santa [${santa}] and year [${year}] already exists.`);
            return;
        }

        const result = await pairing.save()
        res.send(result)
    }
    catch (e) {
        console.log("ERROR - failed to save Pairing", e);
        res.status(500).send();
    }
});

// Batch endpoint for adding many Pairing objects at once 
router.post('/batch', async (req, res) => {
    // Find all valid pairings to save 
    const pairingsToSave = [];

    for (const pairing of req.body) {
        const year = pairing.year;
        const santa = pairing.santa;
        const santee = pairing.santee;

        try {
            const existingPairing = await Pairing.findOne({ year: year, santa: santa });
            if (existingPairing) {
                console.log(`A pairing with santa [${santa}] and year [${year}] already exists. Skipping...`);
            }
            else {
                pairingsToSave.push(new Pairing({ year: year, santa: santa, santee: santee }));
            }
        }
        catch (e) {
            console.log("ERROR - failed to process Pairing(s) during batch save", e);
            res.status(500).send();
            return;
        }
    }

    Pairing.insertMany(pairingsToSave, { ordered: false })
        .then(() => {
            console.log('Successfully saved %s Pairing(s).', pairingsToSave.length);
            res.status(200).send();
        })
        .catch((e) => {
            console.log("ERROR - failed to save Pairing(s)", e)
            res.status(500).send();
        });
});

module.exports = router;
