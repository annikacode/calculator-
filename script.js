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

//Function to append a character to the display value and handle operator
function appendToDisplay(value) {
    if (operator === '' && (value === '+' || value === '-' || value === '*' || value === '/')) {
        operator = value;
        displayValue += ` ${value} `;
    } else {
        displayValue += value;
        if (operator === '') {
            firstNumber += value;
        } else {
            secondNumber += value;
        }
    }
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