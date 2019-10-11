{
  const pageTitle = 'Primitive Types';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// the shared main text
const primitiveTypesText = `Primitives are the types that ARE values, as opposed to data structures (arrays & objects) that CONTAIN values.

There are 5 primitive types (ignoring Symbol for now):

- Strings: anything with quotes around it

- Numbers: what you think of as numbers. then also NaN & Infinty

- Booleans: true & false

- Null value: null (confusingly, null's type name is "object")

- Undefined value: undefined

The "===" operator returns true if two primitives have the same type AND value

To find out what type a primitive value is, you can use the "typeof" operator. This is particularly helpful when all you know is a variable name or the location in a data structure

`;


// log the main text to the console with a specialized ending
const primitiveTypesConsoleEnding = `some links for further reading:`;
console.log(primitiveTypesText + primitiveTypesConsoleEnding);

// organize helpful resources in an object and log them to the console
const primitiveTypesResources = {
  aboutPrimitiveTypes: 'https://javascript.info/types',
  guoVideo: 'https://www.youtube.com/watch?v=pHt_tKYUgbo&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=2',
  typeConversions: 'https://javascript.info/type-conversions',
  explicitCoercion: 'https://github.com/janke-learning/primitive-types/blob/master/explicit-coercion.md',
  nullVsUndefined: 'https://github.com/janke-learning/primitive-types/blob/master/null-vs-undefined.md',
  aboutNaN: 'https://github.com/janke-learning/primitive-types/blob/master/nan.md'

};
console.table(primitiveTypesResources);


// append the main text to the DOM with a specialized ending
const primitiveTypesDomEnding = `Check out these JS Tutor snippets to study primitives in action:`;
const primitiveTypesTextArea = document.createElement('textArea');
primitiveTypesTextArea.innerHTML = primitiveTypesText + primitiveTypesDomEnding;
primitiveTypesText.id = 'primitiveTypes-text';
document.body.appendChild(primitiveTypesTextArea);
document.body.appendChild(document.createElement('hr'));

// a few JS snippets to study and append them to the dom as study links

function primitiveTypes() {

  // there 5 types of primitive values you will study in JavaScript 1

  // these two types have only one possible value
  const nullPrimitive = null;
  const undefinedPrimitive = undefined;

  // there are two possible boolean values
  const booleanPrimitive1 = true;
  const booleanPrimitive2 = false;

  // anything between quotes is a string
  const stringPrimitives = 'anything between quotes';

  // numbers are a bit stranger than the rest
  // besides the "normal" numbers:
  const normalNumber0 = 0;
  const normalNumber1 = 1;
  const normalNumberNegative1 = -1;
  const normalNumber1Point5 = 1.5;
  // there are some strange numbers:
  const strangeNumberNaN = NaN;
  const strangeNumberInfinity = Infinity;

}
renderStudyLinks(primitiveTypes);

function allValuesHaveAType() {

  const valuesToStudy = ["hi!", "", '', ``, Infinity, NaN,
    0, 1, 1e3, true, false, null, undefined,
    1000, -20, 'got it?'
  ];

  valuesToStudy.forEach(value => {
    const type = typeof value;
  });

  // null's type is, confusingly, "object".
  // just go with it, JS is sometimes strange
  // and all there is to do is memorize the strange parts

}
renderStudyLinks(allValuesHaveAType);


function strictEquality() {

  const comparisons = [
    [true, "true"], [false, false], [1, '1'], [1e3, 1000],
    [0, 0.0], [+0, -0], ['null', null], [undefined, undefined]
  ];

  comparisons.forEach(pair => {
    const value1 = pair[0];
    const typeofValue1 = typeof value1;
    const value2 = pair[1];
    const typeofValue2 = typeof value2;
    const strictlyEqual = value1 === value2;
  });

}
renderStudyLinks(strictEquality)


function aBitAboutNaN() {

  // NaN is the only value that does not strictly equal itself
  // this is a bit strange. just remember it
  const valuesToStudy = [
    true, false, 1, 0, "", " ", NaN, undefined, null,
    "got it?", "add some of your own values to study"
  ];

  valuesToStudy.forEach(value => {
    const equalsItself = value === value;
    const doesNotEqualItself = value !== value;
  });

}
renderStudyLinks(aBitAboutNaN);

{
  document.body.appendChild(document.createElement('hr'));
  console.groupEnd();
}

