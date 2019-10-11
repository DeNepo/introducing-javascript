{
  const pageTitle = 'Arrays';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// the shared main text
const arraysText = `Arrays are one of two main data structures in JavaScript.

A good way to think about arrays is like a line.  There's a first, second, third, ... last item in the array

If you remove the first item the second becomes the first, the third, the second, ... and the array becomes shorter!

Like objects and functions, variables access arrays by reference (more about this in the snippets below).

`;


// log the main text to the console with a specialized ending
const arraysConsoleEnding = `some readings to learn more about arrays:`;
console.log(arraysText + arraysConsoleEnding);

// organize helpful resources in an object and log them to the console
const arraysResources = {
  guoVideo: 'https://www.youtube.com/watch?v=W1NTK09o-vM&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=4',
  aboutArrays: 'https://javascript.info/array',
  arrayMethods: 'https://javascript.info/array-methods',
  mutatingArrays: 'https://hackyourfuture.be/array-methods/',
  mapFilterReduce: 'https://medium.com/the-non-traditional-developer/map-filter-reduce-the-holy-trinity-of-array-methods-16ce3bdb69e2',
  referenceVsValue: 'https://github.com/janke-learning/reference-vs-value',
};
console.table(arraysResources);


// append the main text to the DOM with a specialized ending
const arraysDomEnding = `some examples to study arrays in action:`;
const arraysTextArea = document.createElement('textArea');
arraysTextArea.innerHTML = arraysText + arraysDomEnding;
arraysText.id = 'arrays-text';
document.body.appendChild(arraysTextArea);
document.body.appendChild(document.createElement('hr'));

// a few JS snippets to study and append them to the dom as study links
function swappingArrays() {

  let arrA = ["a"];
  let arrB = ["b"];
  let temp = null;

  temp = arrA;
  arrA = arrB;
  arrB = temp;

}
renderStudyLinks(swappingArrays);

function swappingArrayValue() {

  let arrA = ["a"];
  let arrB = ["b"];
  let temp = null;

  temp = arrA[0];
  arrA[0] = arrB[0];
  arrB[0] = temp[0];

}
renderStudyLinks(swappingArrayValue);


function comparingArrays() {

  const arrA1 = ["a"];
  const arrA2 = ["a"];
  console.assert(arrA1 !== arrA2, 'arrays can store the same values and not be the same array');

  arrA1.push("hi!");
  console.assert(arrA1[1] !== arrA2[1], 'modifying arrA1 does not effect arrA2');

  const arrB1 = ['b'];
  const arrB2 = arrB1;
  console.assert(arrB1 === arrB2, 'variables with arrays are the same if they point to the same array');

  arrB1.push("hi!");
  console.assert(arrB1[1] === arrB2[1], 'modifying arrA1 does effect arrA2');

}
renderStudyLinks(comparingArrays);


function accessingSpecificEntries() {

  const arr = ["a", "b", "c", "d"];
  console.assert(arr[2] === "c", 'you can access an item in an array based on it\'s position');

  arr.pop();
  console.assert(arr[2] === "d", 'accessing the same position will not always return the same item');

}
renderStudyLinks(accessingSpecificEntries);


function modifyingSpecificEntries() {


  const arr = ["a", "b", "c", "d"];

  arr[2] = 'hi!';
  console.assert(arr[2] === 'hi!', 'you can modify an item in an array based on it\'s index');

  arr.pop();

  arr[2] = 'bye!';
  console.assert(arr[2] === 'bye!', 'modifying the same index does not always replace the old value');

}
renderStudyLinks(modifyingSpecificEntries);



{
  document.body.appendChild(document.createElement('hr'));
  console.groupEnd();
}

