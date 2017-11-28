// custom defined elements will go here. 
var customComponents = {};
// keys: element names
// values: html functions (data)


var RatWorks = {};
RatWorks.registerComponent = function (elementName, templateFunction) {
	try {
		customComponents[elementName.toLowerCase()] = templateFunction;
		console.log(elementName + ' registered successfully');
	}
	catch{
		console.error('problem registering component ' + elementName);
	}
}

RatWorks.appendNewComponent = function (elementName, data, jqParent) {
	var newJQ = $(customComponents[elementName.toLowerCase()](data));
	jqParent.append(newJQ);
	return newJQ;
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