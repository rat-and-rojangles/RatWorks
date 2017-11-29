// custom defined elements will go here. 
var customComponents = {};
// keys: element names
// values: html functions (data)


var RatWorks = {};
RatWorks.registerComponent = function (elementName, templateFunction) {
	customComponents[elementName.toLowerCase()] = templateFunction;
}

RatWorks.appendNewComponent = function (elementName, data, jqParent) {
	var newJQ = $(customComponents[elementName.toLowerCase()](data));
	jqParent.append(newJQ);
	return newJQ;
}

var customCount = function () {
	let totalCustomCount = 0;
	Object.keys(customComponents).forEach(function (elementName) {
		totalCustomCount += $(elementName).length;
	});
	return totalCustomCount;
}

var scrub = function (jqElement) {
	let customElementsRemain = true;
	while (customElementsRemain) {
		customElementsRemain = false;
		Object.keys(customComponents).forEach(function (elementName) {
			while ($(elementName).length > 0) {
				customElementsRemain = true;
				let currentJQElement = $($(elementName)[0]);
				currentJQElement.prop('outerHTML', customComponents[currentJQElement.prop('tagName').toLowerCase()](currentJQElement.data()));
			}
		});
	}
}

$(document).ready(function () {
	scrub();
});