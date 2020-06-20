const description = (tag, meta) => {
	const description = meta ? meta.slice(1).join(' ') : '';

	return {
		tag: tag.trim(),
		description: description.trim()
	};
};

const descriptionTags = [
	'category',
	'classdesc',
	'copyright',
	'default',
	'defaultvalue',
	'deprecated',
	'desc',
	'description',
	'emits',
	'event',
	'example',
	'file',
	'fileoverview',
	'fires',
	'license',
	'internal',
	'listens',
	'overview',
	'package',
	'private',
	'protected',
	'summary',
	'todo',
	'uses'
];

module.exports = {
	description,
	descriptionTags
}
