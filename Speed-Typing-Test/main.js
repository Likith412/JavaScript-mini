let timerEl = document.getElementById("timer");

let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");

let resultEl = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let spinnerEl = document.getElementById("spinner");
spinnerEl.classList.remove("d-none");

let shedulerIndex = null;
let timeCounter = 0;

function onReload() {
    // set timer 
    shedulerIndex = setInterval(function() {
        timeCounter += 1;
        timerEl.textContent = timeCounter;
        let secondsEl = document.createElement("span");
        secondsEl.textContent = "seconds";
        secondsEl.classList.add("speed-typing-test-timer-sub-part");
        timerEl.appendChild(secondsEl);
    }, 1000);

    // fetch the quote
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.remove("d-none");
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
        });
}

submitBtn.addEventListener("click", function() {
    let quoteInput = quoteInputEl.value;
    let quote = quoteDisplayEl.textContent;
    if (quoteInput === quote) {
        clearInterval(shedulerIndex);
        resultEl.textContent = "You typed in " + timeCounter + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});

resetBtn.addEventListener("click", function() {
    timeCounter = 0;
    timerEl.textContent = timeCounter;
    let secondsEl = document.createElement("span");
    secondsEl.textContent = "seconds";
    secondsEl.classList.add("speed-typing-test-timer-sub-part");
    timerEl.appendChild(secondsEl);

    resultEl.textContent = "";
    quoteDisplayEl.textContent = "";
    quoteInputEl.value = "";
    spinnerEl.classList.remove("d-none");
    onReload();
});

// Run When you Reload the browser
onReload();