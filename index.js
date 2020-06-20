// Import packages
const readFileSync = require('fs').readFileSync;

// Import Modules
const getBlocks = require('./lib/getBlocks');
const getShortDescription = require('./lib/parts/getShortDescription');
const getLongDescription = require('./lib/parts/getLongDescription');
const getTags = require('./lib/parts/getTags');
const getFunction = require('./lib/parts/getFunction');

const parseFiles = (file) => {
	const readFile = readFileSync(file, {encoding:'utf8', flag:'r'});
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

		const getfunction = getFunction(fileBlocks[i]);
		if (Object.keys(getfunction).length > 0) {
			obj['function'] = getfunction;
		}

		docBlocks.push(obj);
	}

	return docBlocks;
};

const blocks = parseFiles('./docblock2.php');
// const blocks = parseFiles('./docblock.js');

// TODO: REMOVE!
console.log(JSON.stringify(blocks, null, 2));

module.exports = parseFiles;
