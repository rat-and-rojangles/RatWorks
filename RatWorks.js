// custom defined elements will go here. 
var customComponents = {};
// keys: element names
// values: html functions (data)


var RatWorks = {};
RatWorks.registerComponent = function (elementName, templateFunction) {
	customComponents[elementName.toLowerCase()] = templateFunction;
}
// RatWorks.createComponentJQuery = function (elementName, data) {
// 	var innerJQ = $(customComponents[elementName.toLowerCase()](data));
// 	var outerJQ = $('<div></div>');

// 	outerJQ.append(innerJQ);
// 	scrub(innerJQ);
// 	return outerJQ;
// }
// RatWorks.createComponentDOM = function (elementName, data) {
// 	return createComponentJQuery(elementName, data)[0];
// }

// var generateRandomDiv = function (data) {
// 	return '<div>' + Math.random().toString() + '</div>';
// }

// RatWorks.registerComponent('fakeelement', generateRandomDiv);

var scrub = function (jqElement) {
	var ratList = jqElement.find('.rat-component');
	while (ratList.length > 0) {
		let currentJQElement = $(ratList[0]);
		currentJQElement.prop('outerHTML', customComponents[currentJQElement.prop('tagName').toLowerCase()](currentJQElement.data()));
	}
}

$(document).ready(function () {
	scrub($('body'));
	$(document).on('keypress', function (e) {
		if (e.which == 32) {
			$('body').append(createComponentJQuery('fakeelement'));
		}
	});
});