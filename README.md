#RatWorks
yeah yeah doc not finished
**Setup**
Import jQuery then import https://rawgit.com/ratfr0/RatWorks/master/RatWorks.js

**Example**
Write something like this in your HTML:
`<some-fake-component class="rat-component" data-some-message="message"></some-fake-component>`


`RatWorks.registerComponent (elementName, templateFunction)`
 - **elementName**
name of the custom HTML t tag will be replaced
 - **templateFunction(data)**
function that returns an HTML string. This will become the outer HTML of the component. Data is the list of data-* attributes on the outer tag

**RatWorks.createAndAppend (htmlString, parentJQ)**
This is the only way to dynamically add your custom components.
 - **elementName**
name of the custom HTML t tag will be replaced
 - **templateFunction(data)**
function that returns an HTML string. This will become the outer HTML of the component. Data is the list of data-* attributes on the outer tag


You can nest components.
