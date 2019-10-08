const renderStudyLinks = (func, err) => {

  const funcString = func.toString();
  const linesArray = funcString.split("\n");
  linesArray[0] = '// ' + linesArray[0];
  linesArray[linesArray.length - 1] = '// ' + linesArray[linesArray.length - 1];
  const commentedTopBottom = linesArray.join("\n");

  const encoded = encodeURIComponent(commentedTopBottom);
  const sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  const deTabbed = sanitized.replace(/%09/g, '%20%20');

  const url = "http://www.pythontutor.com/live.html#code=" + deTabbed + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";

  const a = document.createElement('a');
  a.innerHTML = '<strong>' + func.name + '</strong>:  <i>JS Tutor</i>';
  a.href = url;
  a.target = '_blank';

  const container = document.createElement('div');
  container.id = func.name;
  container.appendChild(a);

  if (err) {
    const url = `https://duckduckgo.com/?q=javascript+mdn+${err.name}+${err.message}&atb=v185-2_d&ia=web`;

    const a = document.createElement('a');
    a.innerHTML += '<strong>' + err.name + '</strong>: <i>DuckDuck Search</i>';
    a.href = url;
    a.target = '_blank';
    a.style.color = 'red';

    container.appendChild(document.createElement('br'));
    container.appendChild(a);
  }

  document.body.appendChild(container);
  document.body.appendChild(document.createElement('hr'));

}


