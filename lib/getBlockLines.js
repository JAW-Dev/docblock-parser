// Import Modules
const getBlockIndicators = require('./getBlockIndicators');

const getBlockLines = file => {
	if (file === undefined) {
		return false;
	}

	try {
		const blocklines = getBlockIndicators(file);
		let result = [];

		for (let i = 0; i < blocklines.length; i++) {
			const start = blocklines[i].start;
			const end = blocklines[i].end;
			let array = []

			for (let j = start; j <= end; j++) {
				array.push(j);
			}

			result.push(array);
		}

		if (result.length === 0) {
			throw new Error('Unable to locate any docBlocks lines');
		}

		return result;
	} catch(err) {
		console.error(err);
	}
}

module.exports = getBlockLines;
