let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

function createAndAppendWord(word) {
    let randomFontSize = Math.ceil(Math.random() * 40);

    let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.classList.add("m-3");
    wordEl.style.fontSize = randomFontSize + "px";

    wordsContainerEl.appendChild(wordEl);
}

function addWord() {
    let userInput = userInputEl.value;
    if (userInput === "") {
        errorMsgEl.textContent = "Please enter a word";
        return;
    } else {
        createAndAppendWord(userInput);
    }
}

for (let eachWord of wordCloud) {
    createAndAppendWord(eachWord);
}

let addBtn = document.getElementById("addBtn");
addBtn.onclick = function() {
    addWord();
}