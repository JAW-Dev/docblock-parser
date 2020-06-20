// Import Modules
const removeBrackets = require('./../../utils/removeBrackets');

const typeDescription = (tag, meta) => {
	const type = meta ? removeBrackets(meta.slice(1, 2).join(' ')) : '';
	const description = meta ? meta.slice(2).join(' ') : '';

	return {
		tag: tag.trim(),
		type: type.trim(),
		description: description.trim()
	};
}

const typeDescriptionTags = [
	'deprecated',
	'returns',
	'throws',
	'typedef',
	'yield',
	'yields',
	'return'
]

module.exports = {
	typeDescription,
	typeDescriptionTags
}
