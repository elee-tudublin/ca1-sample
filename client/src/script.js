// Code goes here
// See Readme

const baseUrl = "http://localhost:8080/calculator";

// Function for each operation
// Note async
async function add() {


  // Declare variables and Constants
  let json;
  const url = `${baseUrl}/add?a=${numA}&b=${numB}`

  // Read values from the form
  const numA = document.getElementById("numA").value;
  const numB = document.getElementById("numB").value;

  // Try block (for fetch)
  try {

    const response = await fetch(url);
    json = await response.json();

    console.log("result: ", json);

  } catch (err) {
    console.log(err);
  }

  // Calculate result + answer text
  const answerText = `${json.a} ${json.operator} ${json.b} = ${json.answer}`;
  
  // Display answer in the page
  document.getElementById("answer").innerHTML = answerText;
}

// see comments in add()
function subtract() {
  let a = Number(document.getElementById("numA").value);
  let b = Number(document.getElementById("numB").value);
  let result = a - b;

  let answerText = `${a} - ${b} = ${result}`;

  document.getElementById("answer").innerHTML = answerText;
}

function multiply() {
  let a = Number(document.getElementById("numA").value);
  let b = Number(document.getElementById("numB").value);
  let result = a * b;

  let answerText = `${a} * ${b} = ${result}`;

  document.getElementById("answer").innerHTML = answerText;
}

function divide(param) {
  let a = Number(document.getElementById("numA").value);
  let b = Number(document.getElementById("numB").value);
  let result = a / b;

  let answerText = `${a} / ${b} = ${result}`;

  document.getElementById("answer").innerHTML = answerText;
}
