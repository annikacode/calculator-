const firstNumber = '';
const operator = '';
const secondNumber = '';


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

const displayValue = '';


//Function to update the display
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

//Function to append a character to the display value 
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}