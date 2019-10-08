{
  const pageTitle = 'Variables';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// the shared main text
const variablesText = `
Variables are a way for us as developers to understand and access what's in the computer's memory.

You can call a variable almost anything you like, but it's very important that you don't.

Since variables are how developers understand what's happening inside of your program, it's very important that you use descriptive names.

`;


// log the main text to the console with a specialized ending
const variablesConsoleEnding = `check out these resources to learn more:`;
console.log(variablesText + variablesConsoleEnding);

// organize helpful resources in an object and log them to the console
const variablesResources = {
  anIntroduction: 'https://javascript.info/variables',
  const: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const',
  let: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let',
};
console.table(variablesResources);


// append the main text to the DOM with a specialized ending
const variablesDomEnding = `for a quick intro to how variables work in JS, take a look at the examples below:`;
const variablesTextArea = document.createElement('textArea');
variablesTextArea.innerHTML = variablesText + variablesDomEnding;
variablesText.id = 'variables-text';
document.body.appendChild(variablesTextArea);
document.body.appendChild(document.createElement('hr'));

// write a few JS snippets to study and append them to the dom as study links
function letVariables() {

  // declaring a new "let" variable opens a new labeled slot in memory
  // if no value is assigned, the default value is 'undefined'
  let declaredLetWithoutAssignment;
  // setting or resetting the value stored in the slot is "assignment"
  declaredLetWithoutAssignment = 'assigned after declaration';

  // you will generally do both declaration and assignment at once
  // notice how this slot is only created when this line is reached?
  let declaredLetWithAssignment = 'assigned at declaration';

  // variables declared with 'let' can have their values reassigned later on
  declaredLetWithoutAssignment = 'new value';
  declaredLetWithAssignment = 'another new value';

}
renderStudyLinks(letVariables);

function constVariables() {

  // const variables cannot be declared without an assignment
  const constantVariable = 'forever!';

  // const variables cannot be declared without an assignment
  // const errorTime; // uncomment this line to throw an error

  // const variables cannot be reassigned later in the program
  constantVariable = 'error time'; // comment this line to avoid the error
}
try {
  constVariables()
} catch (err) {
  renderStudyLinks(constVariables, err);
}


function twoVariableSwap() {

  // swapping the values stored in two variables is a key skill
  // once you get it, it's quite simple
  // if you don't get it, programming will be very confusing
  // so take some time now to understand how variables work
  //  how they store values in memory
  //  that the "=" sign does not work like in math
  //  what happens when one variable is assigned to another
  //  that variable assignments go from right to left
  //  that program memory changes over time
  //  what is written in source code will not be true forever

  let a = 'b', b = 'a';
  let temp = '';

  temp = a;
  a = b;
  b = temp;

  console.assert(a === 'a', 'a should store "a"');
  console.assert(b === 'b', 'b should store "b"');

}
renderStudyLinks(twoVariableSwap);



{
  document.body.appendChild(document.createElement('hr'));
  console.groupEnd();
}

