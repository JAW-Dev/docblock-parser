const removeBrackets = string => {
	if (!string) {
		return string;
	}

	const bracketsPattern = /{.*}/;

	if (bracketsPattern.test(string)) {
		return string.replace('{', '').replace('}', '');
	}

	return string;
}

module.exports = removeBrackets;
removeBrackets