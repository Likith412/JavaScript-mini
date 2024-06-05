let bgContainerElement = document.getElementById("bgContainer");

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

bgContainerElement.style.backgroundColor = bgColorsArray[0];
let arrayLen = bgColorsArray.length;

function changeBgColor() {
    let randomIndex = Math.ceil(Math.random() * arrayLen);
    if (randomIndex === arrayLen) {
        randomIndex = arrayLen - 1;
    }
    bgContainerElement.style.backgroundColor = bgColorsArray[randomIndex];
}