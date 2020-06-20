const getLongDescription = block => {
	if (block === undefined) {
		return false;
	}

	const pattern = /\*\s+[a-zA-Z0-9].*/;
	const match = block.find(value => pattern.test(value));
	let result = '';

	if (match !== undefined) {
		result = match.replace('*', '').trim();
	}

	return result;
}

module.exports = getLongDescription;
