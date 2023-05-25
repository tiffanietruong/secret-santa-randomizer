/**
 * Parse the given string into a list of names, formatted and without duplicates.
 * 
 * @param nameInput		a comma-separated string containing names
 * @returns 			a list of unique, formatted names
 */
export function parseNames(nameInput) {
	const names = nameInput.split(',');

	// (1) Remove whitespace around each name
	// (2) Remove empty entries that occur when typing  
	const parsedNames = names.map(name => name.trim()).filter(name => "" !== name);

	// (3) Remove duplicate names
	return [...new Set(parsedNames)];
}

/**
 * Sorts names within the given string alphabetically.
 * @param {*} nameInput 	a comma-separated string containing names
 * @returns 				an alphabetically sorted string containing the same names
 */
export function alphabeticizeNamesInString(nameInput) {
	return parseNames(nameInput).sort((a, b) => { return a.toLowerCase() < b.toLowerCase() ? -1 : 1}).join(',');
}
