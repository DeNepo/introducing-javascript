{
  const pageTitle = 'Introducing: JavaScript!';
  const header = document.createElement("h1");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// the shared main text
const javascriptText = `JavaScript is the programming language for the web.  It is designed to build websites that run in browsers and browsers are designed to work with JavaScript.

Browsers, websites, and JavaScript are so interconnected that it is not very helpful to study them in isolation. That's why this introduction to JS is written as a website!

Working your way through this taster will be more complicated than reading an article or following a video tutorial, but will give you a huge head-start if you put the time in.

`;


// log the main text to the console with a specialized ending
const javascriptConsoleEnding = `check out these resources to learn more about JavaScript and websites:`;
console.log(javascriptText + javascriptConsoleEnding);

// organize helpful resources in an object and log them to the console
const javascriptResources = {
  anIntroductionToJS: 'https://javascript.info/intro',
  whatIsJavaScript: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
  howSourceCodeWorks: 'https://www.youtube.com/watch?v=QHOY7PyKDh0',
};
console.table(javascriptResources);


// append the main text to the DOM with a specialized ending
const javascriptDomEnding = `A key concept to understand as early as possible is the difference between source code and a running website.  Follow the link below to see the source code for this website:`;
const javascriptTextArea = document.createElement('textArea');
javascriptTextArea.innerHTML = javascriptText + javascriptDomEnding;
javascriptTextArea.id = 'javascript-text';
document.body.appendChild(javascriptTextArea);

// append a link to this website's source code
document.body.appendChild(document.createElement('br'));
const githubSourceCodeLink = document.createElement('a');
githubSourceCodeLink.innerHTML = 'Introducing: JavaScript!  (source code)';
githubSourceCodeLink.target = '_blank';
githubSourceCodeLink.href = 'https://github.com/HackYourFutureBelgium/introducing-javascript';
document.body.appendChild(githubSourceCodeLink);


document.body.appendChild(document.createElement('hr'));

{
  document.body.appendChild(document.createElement('hr'));

  console.groupEnd();
}

