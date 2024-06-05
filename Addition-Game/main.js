let inputElement = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");

let firstNumber = Math.ceil(Math.random() * 100);
let secondNumber = Math.ceil(Math.random() * 100);

firstNumberElement.textContent = firstNumber;
secondNumberElement.textContent = secondNumber;

function check() {
    let userInput = parseInt(inputElement.value);
    let sum = firstNumber + secondNumber;
    if (userInput === sum) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#02840f";
    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
}

function restart() {
    let firstNumber = Math.ceil(Math.random() * 100);
    let secondNumber = Math.ceil(Math.random() * 100);

    firstNumberElement.textContent = firstNumber;
    secondNumberElement.textContent = secondNumber;
    gameResult.textContent = "";
    inputElement.value = "";
}