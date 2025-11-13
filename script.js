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