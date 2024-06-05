let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");

let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");

timeToVisitTab.classList.add("d-none");
attractionsTab.classList.add("d-none");

function aboutBtnClicked() {
    aboutButton.classList.add("selected-button");
    timeToVisitButton.classList.remove("selected-button");
    attractionsButton.classList.remove("selected-button");

    aboutTab.classList.remove("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");
}

function timeToVisitBtnClicked() {
    timeToVisitButton.classList.add("selected-button");
    aboutButton.classList.remove("selected-button");
    attractionsButton.classList.remove("selected-button");

    timeToVisitTab.classList.remove("d-none");
    aboutTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");
}

function attractionsBtnClicked() {
    aboutButton.classList.remove("selected-button");
    timeToVisitButton.classList.remove("selected-button");
    attractionsButton.classList.add("selected-button");

    attractionsTab.classList.remove("d-none");
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
}