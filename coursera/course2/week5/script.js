'use strict';
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// global.document = new JSDOM(html).window.document;
function validateForm(obj) {

}
const headElements = document.head;
const bodyElements = document.body;
const childNodes = Array.from(headElements.childNodes);
const previousSiblingNode = headElements.previousElementSibling;
const nextSiblingNode = bodyElements.nextSiblingNode;
const bodyChildren = headElements.children;

console.log(bodyChildren);