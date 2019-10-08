{
  const pageTitle = 'JavaScript Overview';
  const header = document.createElement("h1");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

const javascriptText = `
JavaScript is the programming language for the web.  It is designed to build websites that run in browsers and browsers are designed to work with JavaScript.

Browsers, websites, and JavaScript are so interconnected that it is not very helpful to study them in isolation. That's why this introduction to JS is written as a website!

Working your way through this taster will be more complicated than reading an article or following a video tutorial, but you will learn sooo much more.

Most importantly you will be learning JS in context (as a part of a live website running in your browser) and you will be familiarizing yourself with the developer tools (designed to help you understand and develop websites).

`;


const javascriptConsoleEnding = `check out these resources to learn more about JavaScript and websites:`;
console.log(javascriptText + javascriptConsoleEnding);

const javascriptResources = {
  anIntroductionToJS: 'https://javascript.info/intro',
  whatIsJavaScript: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
};
console.table(javascriptResources);



const javascriptDomEnding = `A key concept to understand as early as possible is the difference between source code and the running website.  Follow the link below to see the source code for this website:`;
const javascriptTextArea = document.createElement('textArea');
javascriptTextArea.innerHTML = javascriptText + javascriptDomEnding;
javascriptTextArea.id = 'javascript-text';
document.body.appendChild(javascriptTextArea);

document.body.appendChild(document.createElement('br'));

const githubSourceCodeLink = document.createElement('a');
githubSourceCodeLink.innerHTML = '"javascript-overview" repository on GitHub';
githubSourceCodeLink.target = '_blank';
githubSourceCodeLink.href = 'https://github.com/HackYourFutureBelgium/javascript-overview';
document.body.appendChild(githubSourceCodeLink);


document.body.appendChild(document.createElement('hr'));



{
  document.body.appendChild(document.createElement('hr'));

  console.groupEnd();
}

