{
  const pageTitle = 'Functions';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// the shared main text
const functionText = `Functions are snippets of re-usable saved in program memory so you can use them over and over.

The base concepts of functions:

- Defining: when you write "function name(params) { /* lines of code */ }.  This tells JS to save these lines of code for later

- Parameters: the variables you write in the parenthesis of your function definition

- Arguments: the values you pass into your function call

- Calling: when you write "name(args)".  This tells JS to open a new frame in memory, execute the function's code, and return a new value

- Return Value: how function calls can send values back to the global scope

`;


// log the main text to the console with a specialized ending
const functionConsoleEnding = `Check out these readings for more insight:`;
console.log(functionText + functionConsoleEnding);

// organize helpful resources in an object and log them to the console
const functionResources = {
  javascriptDotInfo: 'https://javascript.info/function-basics',
  MDN: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions',
  guoVideo: 'https://www.youtube.com/watch?v=bJUmxDsaduY&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=6'
};
console.table(functionResources);


// append the main text to the DOM with a specialized ending
const functionDomEnding = `take a look at these snippets in JS Tutor to see functions in action:`;
const functionTextArea = document.createElement('textArea');
functionTextArea.innerHTML = functionText + functionDomEnding;
functionText.id = 'function-text';
document.body.appendChild(functionTextArea);
document.body.appendChild(document.createElement('hr'));

// write a few JS snippets to study and append them to the dom as study links

function functionDeclaration() {

  // declaring a function makes it exist in memory
  // but does not execute the code inside

  function declaredAndUnused() {
    const variable = 'this is never executed';
  }

}
renderStudyLinks(functionDeclaration);

function functionCalling() {

  // calling a function will open a new frame in memory
  // variables declared in the function are not available outside the frame
  // the lines of code written in the function body will be executed in order

  function declaredAndUsed() {
    const variable = 'stuck in this frame';
  }

  declaredAndUsed();

  // functions can be called as may times as you like
  declaredAndUsed();
  declaredAndUsed();
  declaredAndUsed();

}
renderStudyLinks(functionCalling);


function arguments() {

  // functions can be declared with parameters
  // parameters are variables that don't exist until function execution

  // functions can take arguments when the are called
  // the values passed as arguments will be assigned to the function parameters

  function takesTwoArguments(param1, param2) {
    const variable = param2 + param1;
  }
  takesTwoArguments(3, 4);
  takesTwoArguments('4', '3');
  takesTwoArguments(true, true);

}
renderStudyLinks(arguments);

function lexicalScope() {

  // variables declared inside a function body are only available in the function frames
  // parameters are also not available before or after the function call
  // this is called "lexical scope"


  function declaredAndUsed(param) {
    const variable = 'stuck in this frame';
  }

  // "variable" and "param" do not exist in global before the call
  declaredAndUsed(); // or during the function call
  // or after the function call


  // JS also has "block scope", but you'll see that later on
}
renderStudyLinks(lexicalScope);



function returnValues() {

  // parameters and local variables are not available outside of a function frame
  // but functions can return values to the global frame

  function returnsAValue(param) {
    const result = param + param;
    return result;
  }

  // the result is returned but lost
  returnsAValue(1);

  // but the return value is lost if you don't store it in a variable
  const returnValueFor2 = returnsAValue(2);
  const returnValueFor10 = returnsAValue(10);

}
renderStudyLinks(returnValues);

{
  document.body.appendChild(document.createElement('hr'));
  console.groupEnd();
}

