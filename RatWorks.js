// custom defined elements will go here. 
var customComponents = {};

// users add their custom shit here somewhere down the line

var RatWorks = {};
RatWorks.registerComponent = function (elementName, createHTML_function) {
	customComponents[elementName.toLowerCase()] = createHTML_function;
}

var generateRandomDiv = function (data) {
	return '<div>' + Math.random().toString() + JSON.stringify(data) + '</div>'
}
var generateNester = function (data) {
	return '<b><fakeelement class="rat-component"></fakeelement></b>'
}

RatWorks.registerComponent('nester', generateNester);
RatWorks.registerComponent('fakeelement', generateRandomDiv);


$(document).ready(function () {
	while ($('.rat-component').length > 0) {
		let currentJQElement = $($('.rat-component')[0]);
		console.log(currentJQElement);
		currentJQElement.prop('outerHTML', customComponents[currentJQElement.prop('tagName').toLowerCase()](currentJQElement.data()));
	}
});