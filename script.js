let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';


// Function to add 
function add(a, b) {
    return a + b;
}


// Function to subtract
function subtract(a, b) {
    return a - b;
}

// Function to multiply
function multiply (a, b) {
    return a * b;
}

// Function to divide
function divide(a, b) {
    if (b === 0) {
        return 'Error'
    } 
    return a / b;
}

//Function to operate based on the operator 
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Error';
    }
}



//Function to update the display
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

//Function to append a character to the display value and handle operator
function appendToDisplay(value) {
    if (!isNaN(value) || value === '.') {
        displayValue += value;
        if (operator === '') {
            firstNumber += value;
        } else {
            secondNumber += value;
        }
    }

    else if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (operator === '') {
            operator = value;
            displayValue += ` ${value} `;
        }
    }
    updateDisplay();
}

//Function to clear display and reset values
function clearDisplay() {
    displayValue = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay();
}

//Function to delete the last character from display 
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
    } else if (operator !== '') {
        operator = '';
    } else {
        firstNumber = firstNumber.slice(0, -1);
    }
    updateDisplay();
}

//Function to calculate the result and update display 
function calculate() {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    const result = operate(operator, num1, num2);
    displayValue = result.toString();
    firstNumber = result;
    operator = '';
    secondNumber = '';
    updateDisplay();
}

//Event listeners for the number buttons 
document.getElementById("zero").addEventListener('click', () => appendToDisplay('0'));
document.getElementById("one").addEventListener('click', () => appendToDisplay('1'));
document.getElementById("two").addEventListener('click', () => appendToDisplay('2'));
document.getElementById("three").addEventListener('click', () => appendToDisplay('3'));
document.getElementById("four").addEventListener('click', () => appendToDisplay('4'));
document.getElementById("five").addEventListener('click', () => appendToDisplay('5'));
document.getElementById("six").addEventListener('click', () => appendToDisplay('6'));
document.getElementById("seven").addEventListener('click', () => appendToDisplay('7'));
document.getElementById("eight").addEventListener('click', () => appendToDisplay('8'));
document.getElementById("nine").addEventListener('click', () => appendToDisplay('9'));
document.getElementById("decimal").addEventListener('click', () => appendToDisplay('.'));

//Event listeners for the operator buttons
document.getElementById('add').addEventListener('click', () => appendToDisplay('+'));
document.getElementById('subtract').addEventListener('click', () => appendToDisplay('-'));
document.getElementById('multiply').addEventListener('click', () => appendToDisplay('*'));
document.getElementById('divide').addEventListener('click', () => appendToDisplay('/'));

//Event listeners for clear, equal and delete buttons
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('delete').addEventListener('click', deleteLast);