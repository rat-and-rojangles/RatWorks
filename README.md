## RatWorks

Simple framework for web components

## Setup

Import jQuery then import https://rawgit.com/ratfr0/RatWorks/master/RatWorks.js

## Usage

`RatWorks.registerComponent (elementName, templateFunction)`

ALL custom components must have the .rat-component class to be properly parsed.
 * **elementName:**
name of the custom HTML tag will be replaced
 * **templateFunction(data):**
function that returns an HTML string. This will become the outer HTML of the component. 
   * **data:** associative array of all data-* attributes on the outer tag. All values are strings.

`RatWorks.appendNewComponent (elementName, data, jqParent)`
This is the only way to add new custom components to the DOM.
 * **elementName:**
name of the custom component you want to create (must be registered)
 * **data:**
data to be used in the HTML function (equivalent to just putting a bunch of data-* attributes in the HTML)
 * **jqParent:**
a jQuery object that the newly created component will be appended to.

## Example
**JS**

```javascript
var randomDivWithMessage = function (data) {
   return '<div>' + Math.random().toString() + data.message '</div>';
}
RatWorks.registerComponent('fakeelement', randomDivWithMessage);
```

**HTML**

```html
<fakeelement class="rat-component" data-message="hello"></fakeelement>
<fakeelement class="rat-component" data-message="world!"></fakeelement>
```

**Result**
>0.801783439031762hello

>0.16689852091225488world!

## Notes
 * You can nest components. Dont forget the .rat-component tho
 * Try to make your components just one element. You can wrap everything in one div if you need to.
 * real ones don't use this piece of crap
