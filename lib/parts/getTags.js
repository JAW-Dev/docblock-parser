// Import modules
const setTag = require('./setTag');

const getTags = block => {
	const pattern = /\*\s+(@\s?)([^.]+).*/g;
	let params = [];

	for (let i = 0; i < block.length; i++) {
		const param = block[i];

		if (param) {
			const match = param.match(pattern);
			if (match){
				const formatted = match[0].replace('*', '').trim();
				const split = formatted.split(' ');
				const tag = split.slice(0, 1).join(' ').replace('@', '');

				params.push(setTag(tag, split));
			}

		}
	}

	return params;
};

module.exports = getTags;
