// Import Modules
const removeBrackets = require('./../../utils/removeBrackets');

const typeNameDescription = (tag, meta) => {
	const type = meta ? removeBrackets(meta.slice(1, 2).join(' ')) : '';
	const name = meta ? meta.slice(2, 3).join(' ') : '';
	const description = meta ? meta.slice(3).join(' ') : '';

	return {
		tag: tag.trim(),
		type: type.trim(),
		name: name.trim(),
		description: description.trim()
	};
}

const typeNameDescriptionTags = [
	'arg',
	'argument',
	'global',
	'param',
	'prop',
	'property',
	'property-read',
	'property-write',
	'var'
]

module.exports = {
	typeNameDescription,
	typeNameDescriptionTags
}