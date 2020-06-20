// Import Modules
const removeBrackets = require('./../../utils/removeBrackets');

const typeName = (tag, meta) => {
	const type = meta ? removeBrackets(meta.slice(1, 2).join(' ')) : '';
	const name = meta ? meta.slice(2).join(' ') : '';

	return {
		tag: tag.trim(),
		type: type.trim(),
		name: name.trim(),
	};
}

const typeNameTags = [
	'access',
	'class',
	'const',
	'constant',
	'constructor',
	'member',
	'module',
	'namespace',
	'this',
	'tutorial',
]

module.exports = {
	typeName,
	typeNameTags
}
