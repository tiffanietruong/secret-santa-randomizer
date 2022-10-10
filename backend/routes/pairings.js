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
    catch (error) {
        console.log("ERROR - failed to save Pairing", error);
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
        catch (error) {
            console.log("ERROR - failed to process Pairing(s) during batch save", error);
            res.status(500).send();
            return;
        }
    }

    Pairing.insertMany(pairingsToSave, { ordered: false })
        .then(() => {
            console.log('Successfully saved %s Pairing(s).', pairingsToSave.length);
            res.status(200).send();
        })
        .catch((error) => {
            console.log("ERROR - failed to save Pairing(s)", error)
            res.status(500).send();
        });
});

/****************** GET ROUTES ******************/

// Gets a user given their name and year
router.get('/', async (req, res) => {
    const year = req.query.year; 
    const santa = req.query.santa;

    try {
        const user = await Pairing.findOne({ year: year, santa: santa });
        if (user) {
            res.send(user);
        }
        else {
            res.status(404).send();
        }
    }
    catch (error) {
        // TODO: add check for database disconnection - 500 error
        console.log("ERROR - failed to get User", error);
        res.status(404).send();
    }
});

/****************** DELETE ROUTES ******************/

// Delete the pairing with the given santa and year.
router.delete('/', async (req, res) => {
    const year = req.body.year;
    const santa = req.body.santa;

    // Delete all favourites documents involving this quiz 
    try {
        const result = await Pairing.deleteOne({ year: year, santa: santa });
        if (result) { 
            if (result.deletedCount === 0) {
                console.log(`There are 0 pairings for santa [${santa}] in year [${year}].`);
            }
            else {
                console.log(`Successfully deleted ${result.deletedCount} Pairing(s) for santa [${santa}] in year [${year}].`)
            }
            res.status(200).send();
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
})

// Delete all pairings for a given year
router.delete('/all/year', async (req, res) => {
    const year = req.body.year;

    try {
        const result = await Pairing.deleteMany({ year: year });
        if (result) { 
            if (result.deletedCount === 0) {
                console.log(`There are 0 pairings for year [${year}].`);
            }
            else {
                console.log(`Successfully deleted ${result.deletedCount} Pairing(s) for year [${year}].`)
            }
            res.status(200).send();
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
})


module.exports = router;
