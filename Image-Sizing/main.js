let imageElement = document.getElementById("image");
let warningMessageElement = document.getElementById("warningMessage");
let imageWidth = document.getElementById("imageWidth");

let defaultImageWidth = 200;

imageWidth.textContent = defaultImageWidth + "px";
imageElement.style.width = defaultImageWidth + "px";

function decreaseImageSize() {
    if (defaultImageWidth <= 100) {
        warningMessageElement.textContent = "Can't Visible. Increase the size of the Image.";
    } else {
        warningMessageElement.textContent = "";
        defaultImageWidth = defaultImageWidth - 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidth.textContent = defaultImageWidth + "px";
    }
}

function increaseImageSize() {
    if (defaultImageWidth >= 300) {
        warningMessageElement.textContent = "Too big. Decrease the size of the Image.";
    } else {
        warningMessageElement.textContent = "";
        defaultImageWidth = defaultImageWidth + 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidth.textContent = defaultImageWidth + "px";
    }
}