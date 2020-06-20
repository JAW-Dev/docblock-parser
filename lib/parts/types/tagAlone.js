const tagAlone = tag => {
	return {
		tag: tag.trim()
	};
}

const tagAloneTags = [
	'abstract',
	'api',
	'async',
	'filesource',
	'generator',
	'hideconstructor',
	'ignore',
	'inheritdoc',
	'inner',
	'instance',
	'override',
	'public',
	'readonly',
	'static',
]

module.exports = {
	tagAlone,
	tagAloneTags
}
