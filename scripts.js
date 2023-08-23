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

const operate = function (operator, a, b) {
    return operator(a, b);
}

// create an empty object for saving values and operators when receiveingh input from user
let firstNumber = '';
let secNumber = '';
let operator = '';

// button functions
const valueBtns = document.querySelectorAll('[valueBtn]');
const operatorBtns = document.querySelectorAll('[operatorBtn]');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const displayValue = 0;

// add button event listeners
clearBtn.addEventListener('click', () => {clearDisplay()});

valueBtns.forEach((button) => button.addEventListener('click', () => {
    displayUpdate(button.textContent);

}))

operatorBtns.forEach((button) => button.addEventListener('click', () => {
    displayUpdate(button.textContent);
}))

const numberUpdate = function (numVariable, value) {
    numVariable = value;
}

const operatorHandler = function (a, b, operator) {

}

// change the display on button click
const display = document.getElementById('screen-text');

const displayUpdate = function (buttonContent) {
    display.textContent = buttonContent;
}

const clearDisplay = function () {
    displayUpdate(0);
    firstNumber = '';
    secNumber = '';
    operator = '';
}

// calculate solution based on operator
const calcSolution = function (operator, a, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case 'x': return multiply(a, b);
        case '/': if (b != 0) return divide(a, b)
            else return null;
        default: return null;
    }
}