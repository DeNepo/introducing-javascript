{
  const pageTitle = 'template chapter';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// the shared main text
const templateText = `
some nice text to introduce this topic

`;


// log the main text to the console with a specialized ending
const templateConsoleEnding = `a nice closing phrase to introduce some extra readings:`;
console.log(templateText + templateConsoleEnding);

// organize helpful resources in an object and log them to the console
const templateResources = {
  linkDescription: 'https://www.badgerbadgerbadger.com/',
};
console.table(templateResources);


// append the main text to the DOM with a specialized ending
const templateDomEnding = `a nice closing phrase to introduce some live-study links:`;
const templateTextArea = document.createElement('textArea');
templateTextArea.innerHTML = templateText + templateDomEnding;
templateText.id = 'template-text';
document.body.appendChild(templateTextArea);
document.body.appendChild(document.createElement('hr'));

// a few JS snippets to study and append them to the dom as study links
function snippet1() {

  // a snippet to demo the concept in JS Tutor

  // eventually these could open in loupe or any other viztool

}
renderStudyLinks(snippet1);

function sinppet2() {

  // snippets that should or might throw errors

}
try {
  sinppet2()
} catch (err) {
  renderStudyLinks(sinppet2, err);
}

// or append another sort of study link
document.body.appendChild(document.createElement('br'));
const githubSourceCodeLink = document.createElement('a');
githubSourceCodeLink.innerHTML = 'Introducing: JavaScript!  (source code)';
githubSourceCodeLink.target = '_blank';
githubSourceCodeLink.href = 'https://github.com/HackYourFutureBelgium/introducing-javascript';
document.body.appendChild(githubSourceCodeLink);



{
  document.body.appendChild(document.createElement('hr'));
  console.groupEnd();
}

