const name = (tag, meta) => {
	const name = meta ? meta.slice(1).join(' ') : '';

	return {
		tag: tag.trim(),
		name: name.trim(),
	};
}

const nameTags = [
	'alias',
	'author',
	'borrows',
	'callback',
	'constructs',
	'exports',
	'func',
	'function',
	'host',
	'method',
	'interface',
	'lends',
	'memberof',
	'memberof!',
	'name',
	'requires',
	'subpackage',
	'variation',
	'virtual',
]

module.exports = {
	name,
	nameTags
}