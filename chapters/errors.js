// have two error docs? one of pre-compile errors, and this one of runtime?

{
  const pageTitle = 'Errors';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// the shared main text
const errorsText = `
The code that you write in your .js files is really instructions for your computer.

Just like when giving instructions to people, it's possible for you to write instructions the computer doesn't understand.

Actually, making mistakes in your instructions for a computer is very easy because computers aren't so clever.

Fortunately whe you make an error, JS will tell you what you did wrong.  Unfortunately JS's feedback is not always so helpful.

It will take a lot of DuckDucking and practice before you get the hang of fixing your errors.

And you'll never stop making errors.  We all do it, remember how computers aren't so clever?
`;


// log the main text to the console with a specialized ending
console.log(errorsText);


// organize helpful resources in an object and log them to the console


// append the main text to the DOM with a specialized ending
const errorsTextArea = document.createElement('textArea');
errorsTextArea.innerHTML = errorsText;
errorsTextArea.id = 'errors-text';
document.body.appendChild(errorsTextArea);
document.body.appendChild(document.createElement('hr'));



// write a few JS snippets to study and append them to the dom as study links
function invalidAssignmentToConst() {

  const constantVariable = 'forever!';

  // const variables cannot be reassigned later in the program
  constantVariable = 'error time';

}
try {
  invalidAssignmentToConst();
} catch (err) {
  renderStudyLinks(invalidAssignmentToConst, err);
}

function cantAccessVariableBeforeDeclaration() {

  // accessing a const/let variable before it is declared will error
  letVariable; // comment this line to remove the error!

  let letVariable = 'got it?';

}
try {
  cantAccessVariableBeforeDeclaration();
} catch (err) {
  renderStudyLinks(cantAccessVariableBeforeDeclaration, err);
}


function isNotAFunction() {

  const aBooleanValue = true;
  aBooleanValue();

  const aStringValue = 'hi!';
  aStringValue();

  const aNumberValue = 1;
  aNumberValue();

  const nullValue = null;
  nullValue();

  const undefinedValue = undefined;
  undefinedValue();

  const anArrayValue = [];
  anArrayValue();

  const anObjectValue = {};
  anObjectValue();

}
try {
  isNotAFunction();
} catch (err) {
  renderStudyLinks(isNotAFunction, err);
}

{
  document.body.appendChild(document.createElement('hr'));

  console.groupEnd();
}

