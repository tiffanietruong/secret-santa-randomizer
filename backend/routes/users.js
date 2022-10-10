/* Users API */
/* Server-side logic related to users */
/* Since this is for personal use, I'm using names as the keys, but a more robust model would use ids. */

const express = require('express');
const router = express.Router();

const User = require("../models/user");

/****************** POST ROUTES ******************/

// Adds a new User to the database
router.post('/', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    const user = new User({
        name: name,
        password: password,
    });

    try {
        const existingUser = await User.findOne({ name: name });
        if (existingUser) {
            res.status(400).send(`A user named [${name}] already exists.`);
            return;
        }
        const result = await user.save()
        res.send(result)
    }
    catch (error) {
        // TODO: add check for database disconnection - 500 error
        console.log("ERROR - failed to save User", error);
        res.status(400).send();
    }
});

/****************** GET ROUTES ******************/

// Gets a user given their name
router.get('/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const user = await User.findOne({ name: name });
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

/****************** PATCH ROUTES ******************/

// Updates a user given their name and previous password.
router.patch('/', async (req, res) => {
    const name = req.body.name;
    const filter = { name: name, password: req.body.oldPassword };
    const update = { password: req.body.newPassword };
    
    try {
        const user = await User.findOneAndUpdate(filter, update, { new: true });
        console.log(user);
        if (!user) {
            res.status(404).send();
        }
        else {
            res.send(user);
        }
    }
    catch (error) {
        console.log("ERROR - failed to patch User", error);
        res.status(400).send();
    }

});

module.exports = router;
