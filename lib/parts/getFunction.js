const getFunction = (block) => {
	if (block === undefined) {
		return false;
	}

	let result = {};

	for (let i = 0; i < block.length; i++) {
		const item = block[i];
		const parmaPattern = /cfw_[a-zA-Z0-9].*/;
		const hookPattern = /apply_filters|do_action/g;

		if (item) {
			const papramMatch = item.match(parmaPattern);
			const hookMatch = item.match(hookPattern);

			if (hookMatch) {
				result['hook'] = hookMatch[0];
			}

			if (papramMatch) {
				result['param'] = papramMatch['input'];
			}
		}
	}

	return result;
}

module.exports = getFunction;