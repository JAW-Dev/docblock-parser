const getLongDescription = block => {
	if (block === undefined) {
		return false;
	}

	const pattern = /\*\s+[a-zA-Z0-9].*/g;
	const first = block.findIndex(value => pattern.test(value));
	let text = [];
	let concatString = '';

	delete block[first]

	for (let i = 0; i < block.length; i++) {
		const description = block[i];

		if (description) {
			const match = description.match(pattern);
			const spaces = description.replace('*', '').search(/\S/);
			const len = description.length;
			const previous = block[(i+len-1)%len];
			const next = block[(i+1)%len];

			if (match && spaces <= 1 && previous !== undefined && next !== undefined) {
				const start = previous === '*' && next.match(pattern);
				const middle = previous.match(pattern) && next.match(pattern);
				const end = previous.match(pattern) && next === '*';
				const single = previous === '*' && next === '*'

				if (start || middle || end) {
					concatString += description.replace('*', '');
				} else if (single) {
					text.push(description.replace('*', '').trim());
				}

				if (end) {
					text.push(concatString.trim());
					concatString = '';
				}
			}
		}
	}

	return text;
}

module.exports = getLongDescription;
