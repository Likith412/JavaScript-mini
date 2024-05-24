let counterElement = document.getElementById("counterValue");

function onDecrement() {
    let counterValue = counterElement.textContent;
    counterValue = parseInt(counterValue) - 1;
    counterElement.textContent = counterValue;
    if (counterValue > 0) {
        counterElement.style.color = 'green';
    } else if (counterValue < 0) {
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'black';
    }
}

function onIncrement() {
    let counterValue = counterElement.textContent;
    counterValue = parseInt(counterValue) + 1;
    counterElement.textContent = counterValue;
    if (counterValue > 0) {
        counterElement.style.color = 'green';
    } else if (counterValue < 0) {
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'black';
    }
}

function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = 'black';
}