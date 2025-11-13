let displayScreen = document.querySelector(".operands");

let numbers = Array.from(document.querySelectorAll(".btn"));
let operators = Array.from(document.querySelectorAll(".ops"));

let calculate = document.getElementById("equal");
let clear = document.getElementById("clear");
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