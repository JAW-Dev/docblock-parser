// Import Modules
const removeBrackets = require('./../../utils/removeBrackets');

const type = (tag, meta) => {
	const type = meta ? removeBrackets(meta.slice(1).join(' ')) : '';

	return {
		tag: tag.trim(),
		type: type.trim()
	};
}

const typeTags = [
	'access',
	'augments',
	'enum',
	'extends',
	'external',
	'implements',
	'kind',
	'mixes',
	'mixin',
	'type'
]

module.exports = {
	type,
	typeTags
}
