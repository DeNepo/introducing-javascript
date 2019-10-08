{
  const pageTitle = 'Browser Devtools';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

const devtoolsText = `
before reading any further, open your devtools!

this taster is written to introduce JS in context: a live website.

And to read a live website, you use the devtools

(fill this out)
(render a link or two to devtool resources)
`;

const devtoolsTextArea = document.createElement('textArea');
devtoolsTextArea.innerHTML = devtoolsText;
devtoolsText.id = 'devtools-text';
document.body.appendChild(devtoolsTextArea);

console.log(devtoolsText);



{
  document.body.appendChild(document.createElement('hr'));

  console.groupEnd();
}

