let display = document.getElementById('display');
let expression = ' ';

function appendNumber(number) {
  expression += number;
  display.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
}

function calculateResult() {
  try {
    expression = eval(expression);
    display.value = expression;
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  expression = '';
  display.value = '';
}
 