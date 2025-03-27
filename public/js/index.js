// keep track of current expression
let expression = "";
const resultString = document.getElementById("result");

// append text to the current expression
function appendText(text) {
    expression += text;
    displayText(expression);
}

// display the given result
function displayText(res) {
    resultString.innerText = res;
}

// use Gemini to evaluate expression
function evaluateExpression() {
    // Send post request to /calculate endpoint
    fetch('/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression : expression })
      })
      .then(response => response.json())
      .then(data => {
        // display the response
        displayText(data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

// clear the given expression and the text
function clearText() {
    expression = "";
    displayText("");
}