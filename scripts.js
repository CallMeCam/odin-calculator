// operator functions
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
}

// create empty vars for storing numbers, operator, and solution
let firstNumber = '';
let secNumber = '';
let operator = null;
let currentSolution = 0;

// button functions
const valueBtns = document.querySelectorAll('[valueBtn]');
const operatorBtns = document.querySelectorAll('[operatorBtn]');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equalsBtn = document.getElementById('equals');
const displayValue = 0;

// add button event listeners
clearBtn.addEventListener('click', () => {clearDisplay()});

valueBtns.forEach((button) => button.addEventListener('click', () => {
    if (operator === null) {
        firstNumber += button.textContent;
        displayUpdate(firstNumber);
    } else {
        secNumber += button.textContent;
        displayUpdate(secNumber);
    }
}))

operatorBtns.forEach((button) => button.addEventListener('click', () => {
    // add function so that if operator is already set to a value, it solves and shows result
        // after it solves, all values are reset except for display value
    if (operator === null) {
        operator = button.textContent;
        displayUpdate(button.textContent);
    } else {
        currentSolution = calcSolution(operator, firstNumber, secNumber);
        displayUpdate(currentSolution);
        firstNumber = currentSolution;
        secNumber = '';
        operator = button.textContent;
    }
}))

equalsBtn.addEventListener('click', () => {
    currentSolution = calcSolution(operator, firstNumber, secNumber);
    displayUpdate(currentSolution);
    resetVals();
}) 

deleteBtn.addEventListener('click', () => {
    displayUpdate('this button doesn\'t work yet');
})

// change the display on button click
const display = document.getElementById('screen-text');

const displayUpdate = function (buttonContent) {
    display.textContent = buttonContent;
}

const resetVals = function () {
    firstNumber = '';
    secNumber = '';
    operator = null;
    currentSolution = 0;
}

const clearDisplay = function () {
    displayUpdate(0);
    firstNumber = '';
    secNumber = '';
    operator = null;
}

// calculate solution based on operator
const calcSolution = function (operator, a, b) {
    a = Number (a);
    b = Number (b);
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case 'x': return multiply(a, b);
        case '/': if (b != 0) return divide(a, b)
            else return 'don\'t do that!';
        default: return null;
    }
}