{
  const pageTitle = 'Browser Devtools';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

const devtoolsText = `this introduction to JS is written as a simple website (using JavaScript!) to introduce JS in it's natural context: live websites!

You can think of this like a JavaScript Immersion class.  Not only are you learning JS, but your study materials are written with it.

To study JavaScript in context, you need to learn to use your browser's developer tools.

These are a set of utilities built into your browser that help you to look behind what you first see on the screen and into how it was built.

Trying to learn JavaScript and web development without mastering the devtools is like learning to cook on paper.  It's silly!

Mastering the kitchen itself is at least as important as learning recipes and cooking techniques.

`;


const devtoolsConsoleEnding = 'Below are some links to help you get started with the devtools:'
console.log(devtoolsText + devtoolsConsoleEnding);

const devtoolsResources = {
  whatAreDevTools: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools',
  theNoobsGuideVideo: 'https://www.youtube.com/watch?v=KU96gwFCpZA',
  aNiceOverview: 'https://flaviocopes.com/browser-dev-tools/',
};
console.table(devtoolsResources);



const devtoolsDomEnding = `Open your browser's console and click on "Browser Devtools" to find some resources to get you started with the devtools.

(click on your browser in the list below to learn how to open your console)`;

const devtoolsTextArea = document.createElement('textArea');
devtoolsTextArea.innerHTML = devtoolsText + devtoolsDomEnding;
devtoolsText.id = 'devtools-text';
document.body.appendChild(devtoolsTextArea);

const openingBrowserConsole = {
  firefox: 'https://developer.mozilla.org/en-US/docs/Tools/Browser_Console',
  chrome: 'https://www.webucator.com/how-to/how-open-google-chromes-javascript-console.cfm',
  opera: 'https://www.youtube.com/watch?v=pT2qwQK09OI',
};

for (let browserName in openingBrowserConsole) {

  document.body.appendChild(document.createElement('br'));
  const howToOpenItLink = document.createElement('a');
  howToOpenItLink.innerHTML = browserName;
  howToOpenItLink.target = '_blank';
  howToOpenItLink.href = openingBrowserConsole[browserName];
  document.body.appendChild(howToOpenItLink);

}



{
  document.body.appendChild(document.createElement('hr'));

  console.groupEnd();
}

