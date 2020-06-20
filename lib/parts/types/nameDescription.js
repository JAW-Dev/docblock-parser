const nameDescription = (tag, meta) => {
	const name = meta ? meta.slice(1, 2).join(' ') : '';
	const description = meta ? meta.slice(2).join(' ') : '';

	return {
		tag: tag.trim(),
		name: name.trim(),
		description: description.trim()
	};
}

const nameDescriptionTags = [
	'license',
	'link',
	'see',
	'since',
	'source',
	'version',
]

module.exports = {
	nameDescription,
	nameDescriptionTags
}