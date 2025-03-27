// const div = document.getElementById("test");

// const test = document.createElement('p');
// test.innerHTML = "testingaefeawe";

// div.appendChild(test);
let expression = "";
const resultString = document.getElementById("result");

function appendText(text) {
    expression += text;
    displayText(expression);
}

function displayText(res) {
    resultString.innerText = res;
}

function evaluateExpression() {
    
}

function clearText() {
    expression = "";
    displayText("");
}