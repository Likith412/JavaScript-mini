let counterValueEl = document.getElementById("counterValue");
let incrementBtnEl = document.getElementById("incrementBtn");

let clickCount = localStorage.getItem("clickCount");
if (clickCount === null) {
    localStorage.setItem("clickCount", "0");
} else {
    counterValueEl.textContent = clickCount;
}



function onIncrementCounterValue() {
    let currentClickCount = localStorage.getItem("clickCount");
    let updatedClickCount = (parseInt(currentClickCount) + 1) + "";
    counterValueEl.textContent = updatedClickCount;
    localStorage.setItem("clickCount", updatedClickCount);
}



incrementBtnEl.onclick = function() {
    onIncrementCounterValue();
};