{
  const pageTitle = 'Objects';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// the shared main text
const objectsText = `Objects are one of two main data structures in JavaScript.

A good way to think about objects is like an address on a list of phone numbers.

There is no real order to phone numbers, and calling the same phone number will always reach the same sim card.  But the same person may not always answer the phone.

Like arrays and functions, variables access objects by reference (more about this in the snippets below).

`;


// log the main text to the console with a specialized ending
const objectsConsoleEnding = `take a look at these links to dig deaper:`;
console.log(objectsText + objectsConsoleEnding);

// organize helpful resources in an object and log them to the console
const objectsResources = {
  guoVideo: 'https://www.youtube.com/watch?v=Z_ozyN5MyWY&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=5',
  javascriptDotInfo: 'https://javascript.info/object',
  theBasicsByMDN: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics',
  referenceVsValue: 'https://github.com/janke-learning/reference-vs-value',
  dotsVsBrackets: 'https://github.com/janke-learning/dots-vs-brackets'
};
console.table(objectsResources);


// append the main text to the DOM with a specialized ending
const objectsDomEnding = `a nice closing phrase to introduce some live-study links:`;
const objectsTextArea = document.createElement('textArea');
objectsTextArea.innerHTML = objectsText + objectsDomEnding;
objectsText.id = 'objects-text';
document.body.appendChild(objectsTextArea);
document.body.appendChild(document.createElement('hr'));

// a few JS snippets to study and append them to the dom as study links
function swappingObjects() {

  let objA = { property: 'b' };
  let objB = { property: 'a' };
  let temp = null;

  temp = objA;
  objA = objB;
  objB = temp;

}
renderStudyLinks(swappingObjects);

function swappingObjectValues() {

  let objA = { property: 'b' };
  let objB = { property: 'a' };
  let temp = null;

  temp = objA.property;
  objA.property = objB.property;
  objB.property = temp.property;

}
renderStudyLinks(swappingObjectValues);


function comparingObjects() {

  let objA1 = { property: 'a' };
  let objA2 = { property: 'a' };
  console.assert(objA1 !== objA2, 'objects can store the same values and not be the same object');

  objA1.push("hi!");
  console.assert(objA1[1] !== objA2[1], 'modifying objA1 does not effect objA2');

  const objB1 = { property: 'b' };
  const objB2 = objB1;
  console.assert(objB1 === objB2, 'variables with objects are the same if they point to the same object');

  objB1.newProp = "hi!";
  console.assert(objB1.newProp === objB2.newProp, 'modifying objA1 does effect objA2');

}
renderStudyLinks(comparingObjects);


function accessingSpecificEntries() {

  const obj = { a: 1, b: 2, c: 3, d: 4 };
  console.assert(obj.c === 3, 'you can access an item in an object based on it\'s key');

  delete obj.a;
  console.assert(obj.c === 3, 'accessing the same key will always return the same item');

}
renderStudyLinks(accessingSpecificEntries);


function modifyingSpecificEntries() {

  const obj = { a: 1, b: 2, c: 3, d: 4 };

  obj.c = 'hi!';
  console.assert(obj.c === 'hi!', 'you can modify an item in an object based on it\'s key');

  delete obj.a;

  obj.c = 'bye!';
  console.assert(obj.c === 'bye!', 'modifying the same key always replaces the old value');

}
renderStudyLinks(modifyingSpecificEntries);


function dotsVsBrackets() {
  const og = { first: 'fifty', last: 'cent' };

  const curtis = 'first';
  const jackson = 'last';

  const firstByDot = og.first;
  const lastByDot = og.last;

  const firstByBracket = og[curtis];
  const secondByBracket = og[jackson];
}
renderStudyLinks(dotsVsBrackets);




{
  document.body.appendChild(document.createElement('hr'));
  console.groupEnd();
}

