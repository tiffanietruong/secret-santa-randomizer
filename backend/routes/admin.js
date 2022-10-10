/* Admin API */
/* routes not used by the app but rather by me behind the scenes for personal use */

const express = require('express');
const router = express.Router();
const axios = require('axios');

/* Global data to change as needed */
const year = "2022";
const UNI_RENEGADES = {
    "NAMES": ["Clover", "Isaac", "Joey", "Julia", "Natalie", "Tiffanie", "Tiffany", "Vanessa"],
    "EXCLUSIONS": {
        "Clover": [],
        "Isaac": [],
        "Joey": ["Vanessa"],
        "Julia": ["Isaac"],
        "Natalie": ["Julia"],
        "Tiffanie": [],
        "Tiffany": [],
        "Vanessa": ["Natalie"]
    }
};

/****************** POST ROUTE ******************/

router.post('/', async (req, res) => {
    const data = generateAssignment();

    if (data[0]) {
        console.log("Successfully generated Uni Renegades assignment.")

        axios({
            method: 'post',
            url: 'http://localhost:5000/api/pairing/batch',
            data: data[1]
        })
        .then((postRes) => {
            if (postRes.status === 200) {
                console.log("Successfully saved Uni Renegades assignment to database.");
                res.status(200).send();

            }
            else {
                res.status(500).send("Failed to save Uni Renegades assignment to database.");
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Failed to save Uni Renegades assignment to database.");
        });
        
    }
    else {
        console.log("Failed to generate Uni Renegades assignment. Please try again. If this keeps occuring, then it is likely there is no possible assignment with these exclusions.");
        res.status(500).send();
    }
});

/****************** ASSIGNMENT HELPER FUNCTIONS ******************/

/* 
* Return a random integer between min (included) and max (excluded)
*/
const getRandInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*

* Return true if and only if santa1 and santa2 can swap assigned santees. 
* That is, santa1 can be assigned to santee2 and santa2 can be assigned to santee1. 
*/
const canSwapSantees = (santa1, santee1, santa2, santee2, exclusionMap) => {
    // CASE: the santa is equal to the santee
    if (santa1 === santee2 || santa2 === santee1) {
        return false;
    }
    // CASE: santee2 is part of santa1's exclusions
    else if (exclusionMap.has(santa1) && (exclusionMap.get(santa1)).has(santee2)) {
        return false;
    }
    // CASE: santee1 is part of santa2's exclusions
    else if (exclusionMap.has(santa2) && (exclusionMap.get(santa2)).has(santee1)) {
        return false;
    }
    return true;
}

/*
* Format assignment to match database model for ease of saving.
*/
const formatAssignment = (year, names, assignment) => {
    const assignmentList = [];
    for (let i = 0; i < names.length; i++) {
        assignmentList.push({ "year": year, "santa": names[i], "santee": assignment[i] });
    }
    return (assignmentList);
}

/*
* Duplicate of the frontend generate assignment util, but slightly modified
* to handle static data related to the Uni Renegades friend group.
*/
const generateAssignment = () => {
    const numNames = UNI_RENEGADES.NAMES.length;
    let numGenerated = 0;
    const assignment = [];

    // Create exclusion list of (santa => set of excusions) using actual Map and Set data structures
    // This improves performance for find operations.
    const exclusionMap = new Map();
    for (const name of UNI_RENEGADES.NAMES) {
        exclusionMap.set(name, new Set(UNI_RENEGADES.EXCLUSIONS[name]));
    }

    // Generate an initial assignment 
    while (numGenerated < numNames) {
        const santa = UNI_RENEGADES.NAMES[numGenerated];
        const santee = UNI_RENEGADES.NAMES[getRandInt(0, numNames)];

        // If the last santa is forced to get themselves,
        // swap santees with a random person from the list 
        if (numGenerated === numNames - 1 && !assignment.includes(santa)) {
            const randIndex = getRandInt(0, numNames - 1);
            const swapSantee = assignment[randIndex];
            assignment.splice(randIndex, 1, santa);

            // Repeat of code below to prevent redundant conditional check
            assignment.push(swapSantee);
            numGenerated++;
        }

        // A pairing is valid if the santee has not already been assigned 
        // and the santee is not the secret santa themselves
        else if (santa !== santee && !assignment.includes(santee)) {
            assignment.push(santee);
            numGenerated++;
        }
    }

    // Do corrections based on exclusions 
    for (let i = 0; i < numNames; i++) {
        const currSanta = UNI_RENEGADES.NAMES[i];
        const currSantee = assignment[i];
        const exclusions = exclusionMap.get(currSanta);

        // Move to next santa if this santa has no exclusions OR the current santee is not an exclusion
        // NOTE: this is changed from frontend version since all uni rens appear as keys in this version 
        if (exclusions.size === 0 || !exclusions.has(currSantee)) {
            continue;
        }

        // Otherwise, this santee is in their exclusion list,
        // so find a person they can swap santees with 
        let cannotSwap = true;
        for (let j = 0; j < numNames; j++) {
            const swapSanta = UNI_RENEGADES.NAMES[j];
            const swapSantee = assignment[j];

            if (canSwapSantees(swapSanta, swapSantee, currSanta, currSantee, exclusionMap)) {
                assignment[j] = currSantee;
                assignment[i] = swapSantee;
                cannotSwap = false; // found person
                break;
            }
        }

        // The current assignment does not allow for this santa to swap with anyone.
        if (cannotSwap) {
            return [false, []];
        }
    }

    return [true, formatAssignment(year, UNI_RENEGADES.NAMES, assignment)]
}

module.exports = router;
