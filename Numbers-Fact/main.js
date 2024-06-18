let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");

let spinnerEl = document.getElementById("spinner");

function displayFact(event) {
    if (event.key === "Enter") {
        let number = userInputEl.value;
        if (number === "") {
            alert("Enter a Number");
        } else {
            factEl.textContent = "";
            spinnerEl.classList.toggle("d-none");
            let url = "https://apis.ccbp.in/numbers-fact?number=" + number;
            let options = {
                method: "GET"
            };

            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    spinnerEl.classList.toggle("d-none");
                    factEl.textContent = jsonData.fact;
                });
        }
    }

}

userInputEl.addEventListener("keydown", displayFact);