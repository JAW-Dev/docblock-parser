// Import Modules
const description = require('./types/description').description;
const descriptionTags = require('./types/description').descriptionTags;
const name = require('./types/name').name;
const nameTags = require('./types/name').nameTags;
const nameDescription = require('./types/nameDescription').nameDescription;
const nameDescriptionTags = require('./types/nameDescription').nameDescriptionTags;
const tagAlone = require('./types/tagAlone').tagAlone;
const tagAloneTags = require('./types/tagAlone').tagAloneTags;
const type = require('./types/type').type;
const typeTags = require('./types/type').typeTags;
const typeDescription = require('./types/typeDescription').typeDescription;
const typeDescriptionTags = require('./types/typeDescription').typeDescriptionTags;
const typeName = require('./types/typeName').typeName;
const typeNameTags = require('./types/typeName').typeNameTags;
const typeNameDescription = require('./types/typeNameDescription').typeNameDescription;
const typeNameDescriptionTags = require('./types/typeNameDescription').typeNameDescriptionTags;

const setTag = (tag, meta) => {

	if(!tag) {
		return {};
	}

	let output = '';

	if (descriptionTags.includes(tag) ) {
		output = description(tag, meta);
	} else if (nameTags.includes(tag) ) {
		output = name(tag, meta);
	} else if (nameDescriptionTags.includes(tag) ) {
		output = nameDescription(tag, meta);
	} else if (tagAloneTags.includes(tag) ) {
		output = tagAlone(tag);
	} else if (typeTags.includes(tag) ) {
		output = type(tag, meta);
	} else if (typeDescriptionTags.includes(tag) ) {
		output = typeDescription(tag, meta);
	} else if (typeNameTags.includes(tag) ) {
		output = typeName(tag, meta);
	} else if (typeNameDescriptionTags.includes(tag) ) {
		output = typeNameDescription(tag, meta);
	} else {
		output = description(tag, meta);
	}

	return output;
}

module.exports = setTag;
