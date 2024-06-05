let customButtonElement = document.getElementById("customButton");

function applyStyles() {
    let bgColorInput = document.getElementById("bgColorInput").value;
    let fontColorInput = document.getElementById("fontColorInput").value;
    let fontSizeInput = document.getElementById("fontSizeInput").value;
    let fontWeightInput = document.getElementById("fontWeightInput").value;
    let paddingInput = document.getElementById("paddingInput").value;
    let borderRadiusInput = document.getElementById("borderRadiusInput").value;

    customButtonElement.style.backgroundColor = bgColorInput;
    customButtonElement.style.color = fontColorInput;
    customButtonElement.style.fontSize = fontSizeInput;
    customButtonElement.style.fontWeight = fontWeightInput;
    customButtonElement.style.padding = paddingInput;
    customButtonElement.style.borderRadius = borderRadiusInput;
}