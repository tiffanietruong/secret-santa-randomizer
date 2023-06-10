import { IDS } from "../ids";

// TODO: consider refactoring app to work with sets instead of lists

/**
 * Parses the given string into a list of names, with whitespace trimmed and without duplicates.
 * 
 * @param nameInput		a comma-separated string containing names
 * @returns 		    	a list of unique, formatted names
 */
export function parseInputIntoNames(nameInput) {
	const names = nameInput.split(',');
	const parsedNames = names.map(name => name.trim()).filter(name => "" !== name);
	return [...new Set(parsedNames)];
}

/**
 * Sorts names within the given string alphabetically.
 * @param {*} nameInput 	a comma-separated string containing names
 * @returns 				an alphabetically sorted string containing the same names
 */
export function alphabeticizeNamesInString(nameInput) {
	return parseInputIntoNames(nameInput).sort((a, b) => { return a.toLowerCase() < b.toLowerCase() ? -1 : 1 }).join(',');
}

/**
 * Parse the given string into a map of (santa, list of santee) representing exclusions.
 * 
 * The exclusion string must be multi-lined in the form 'santa: exclusion1, exclusion2, ...'
 * All values in the map will exist in the given name input.
 *  * 
 * @param {*} exclusionInput	a multi-line string containing exclusions
 * @returns 					key-value pairs representing exclusions in the form of (santa, list of excluded santees)
 */
export function parseInputIntoExclusions(names, exclusionInput) {
	if (!exclusionInput || exclusionInput.length === 0) return {};

	const santaToExclusions = new Map();
	const exclusionStrings = exclusionInput.split('\n').map(line => line.trim()).filter(line => "" !== line);
	const namesList = getNames();

	for (let i = 0; i < exclusionStrings.length; i++) {
		const currLine = exclusionStrings[i].trim();
		let {santa, santees} = parseExclusionLine(currLine);

		if (!namesList.has(santa)) {
			continue;
		}

		santees = santees.filter(santee => namesList.has(santee));
		santaToExclusions.set(santa, santees);
	}
	console.log(santaToExclusions, santaToExclusions);
	return santaToExclusions;
}

function parseExclusionLine(line) {
	const colon = line.indexOf(':');
	if (colon === -1) return '';

	const santa = line.slice(0, colon).trim();
	const santees = parseInputIntoNames(line.slice(colon + 1));

	return {santa: santa, santees: santees};
}

function getNames() {
	const nameTextArea = document.getElementById(IDS.NAME_TEXTAREA);
	if (!nameTextArea || nameTextArea.value === '') {
		return "";
	}
	return new Set(parseInputIntoNames(nameTextArea.value));
}
