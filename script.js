let displayScreen = document.querySelector(".operands");

let numbers = Array.from(document.querySelectorAll(".btn"));
let operators = Array.from(document.querySelectorAll(".ops"));

let calculate = document.getElementById("equal");
let clear = document.getElementById("clear");

let firstOperand = null;
let secondOperand = null;
let operation = null;
let prevOperation = null;
let equalsUsed = null;

numbers.map(button => button.addEventListener("click", () => {
    if (operation != null) {
        displayScreen.textContent = '';
        prevOperation = operation;
        operation = null;
    }
    displayScreen.textContent += button.textContent;
}));

operators.map(button => button.addEventListener("click", () => {
    if (displayScreen.textContent === '') {
        return;
    }
    if (equalsUsed) {
        secondOperand = null;
        equalsUsed = false;
    }
    if (firstOperand === null) {
        firstOperand = parseInt(displayScreen.textContent);
        operation = button.id;
        return;
    } else if (operation) {
        return;
    } else if (secondOperand === null) {
        secondOperand = parseInt(displayScreen.textContent);
        operation = button.id;

        firstOperand = calculateOperation(firstOperand, secondOperand, prevOperation);
        secondOperand = null;
        return;
    }
    console.log("ERROR?");
}));

calculate.addEventListener("click", () => {
    if (firstOperand !== null && secondOperand !== null) {
        firstOperand = calculateOperation(firstOperand, secondOperand, prevOperation);
    } else {
        secondOperand = parseInt(displayScreen.textContent)
        firstOperand = calculateOperation(firstOperand, secondOperand, prevOperation);
    }
    equalsUsed = true;
});

function add(a, b) {
    console.log(`a: ${a} b:${b}`)
    return a + b;
}

function subtract(a, b) {
    console.log(`a: ${a} b:${b}`)
    return a - b;
}

function multiply(a, b) {
    console.log(`a: ${a} b:${b}`)
    return a * b;
}

function divide(a, b) {
    console.log(`a: ${a} b:${b}`)
    return a / b;
}

function calculateOperation(a, b, id) {
    let result = 0;
    switch (id) {
        case "addition":
            result = add(a, b);
            break;
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
            break;
    }
    displayScreen.textContent = result;
    return result;
}