// Import packages
const readFileSync = require('fs').readFileSync;

// Import Modules
const getBlocks = require('./lib/getBlocks');
const getShortDescription = require('./lib/parts/getShortDescription');
const getLongDescription = require('./lib/parts/getLongDescription');
const getTags = require('./lib/parts/getTags');
const getFunction = require('./lib/parts/getFunction');

const parseFiles = (file) => {
	const readFile = readFileSync(file, { encoding: 'utf8', flag: 'r' });
	const fileBlocks = getBlocks(readFile);

	let docBlocks = [];

	for (let i = 0; i < fileBlocks.length; i++) {
		let obj = {};

		// Set Short Description
		const shortDesc = getShortDescription(fileBlocks[i]);
		if (shortDesc) {
			obj['title'] = shortDesc;
		}

		// Set Long Description
		const longDesc = getLongDescription(fileBlocks[i]);
		if (longDesc.length > 0) {
			obj['description'] = longDesc;
		}

		const tags = getTags(fileBlocks[i]);
		if (tags.length > 0) {
			obj['tags'] = tags;
		}

		docBlocks.push(obj);
	}

	return docBlocks;
};

module.exports = parseFiles;
