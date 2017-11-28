// custom defined elements will go here. 
var customComponents = {};
// keys: element names
// values: html functions (data)


var RatWorks = {};
RatWorks.registerComponent = function (elementName, templateFunction) {
	customComponents[elementName.toLowerCase()] = templateFunction;
}

RatWorks.appendNewComponent = function (elementName, data, jqParent) {
	jqParent.append($(customComponents[elementName.toLowerCase()](data)));
}

var scrub = function (jqElement) {
	while ($('.rat-component').length > 0) {
		let currentJQElement = $($('.rat-component')[0]);
		currentJQElement.prop('outerHTML', customComponents[currentJQElement.prop('tagName').toLowerCase()](currentJQElement.data()));
	}
}

$(document).ready(function () {
	scrub();
});