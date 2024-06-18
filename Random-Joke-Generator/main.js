let jokeTextEl = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function displayJoke() {
    jokeTextEl.textContent = "";
    spinnerEl.classList.toggle("d-none");

    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.toggle("d-none");
            jokeTextEl.textContent = jsonData.value;
        });
}

jokeBtn.addEventListener("click", displayJoke);