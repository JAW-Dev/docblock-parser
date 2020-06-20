// Import packages
const lineNumber = require('line-number');

const getBlockIndicators = file => {
	if (file === undefined) {
		return false;
	}

	try {
		const beginBlockRegex = /^\s*\/.*[\*|\r\n]$/gim;
		const endBlockRegex = /^\s*\*.*[\/|\r\n]$/gim;
		const start = lineNumber(file, beginBlockRegex);
		const end = lineNumber(file, endBlockRegex);
		const result = [];

		for (let i = 0; i < start.length; i++) {
			for (let j = 0; j < end.length; j++) {
				if ( i === j ) {
					const obj = {
						start: start[i].number,
						end: end[j].number
					}
					result.push(obj);
				}
			}
		}

		if (result.length === 0) {
			throw new Error('Unable to locate any docBlocks');
		}

		return result
	} catch(err) {
		console.error(err);
	}
}

module.exports = getBlockIndicators;
