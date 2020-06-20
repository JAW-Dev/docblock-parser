// Import Modules
const getBlockLines = require('./getBlockLines');

const getBlocks = file => {
	if (file === undefined) {
		return false;
	}

	try {
		const lines = getBlockLines(file);
		const doc = file.split('\n');
		let result = [];
		const functions = ['apply_filters', 'do_action'];

		lines.forEach(line => {
			let temp = [];
			for (let i = 0; i < line.length; i++) {
				doc.forEach((value, index) => {
					const len = doc.length;
					const next = doc[(index+1)%len];


					if(line[i] === (index + 1)) {
						temp.push(value.replace(/\t/g, '').trim());

						functions.forEach(func => {
							const pattern = '(?<=(' + func + '\\()(\\n?).*(\\s.*?))(["|\'](.*?)["|\'])';
							const regex = new RegExp(pattern, 'g');
							const match = next.match(regex);
							if (match) {
								temp.push(func.replace(/\t/g, '').trim());
								temp.push(match[0].replace(/\t/g, '').replace(/'/g, '').trim());
							}
						})
					}
				});
			}
			result.push(temp);
		})

		if (result.length === 0) {
			throw new Error('Unable to locate any docBlocks');
		}

		return result;
	} catch(err) {
		console.error(err);
	}
}

module.exports = getBlocks;
