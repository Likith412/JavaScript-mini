let rowEl = document.getElementById("row");
let searchInputEl = document.getElementById("searchInput");

let spinnerEl = document.getElementById("spinner");

let searchResults = [];

function createAndAppendBook(book) {
    let colEl = document.createElement("div");
    colEl.classList.add("col-6", "col-lg-4", "col-xl-3");
    rowEl.appendChild(colEl);

    let bookImgEl = document.createElement("img");
    bookImgEl.classList.add("book-img");
    bookImgEl.src = book.imageLink;
    colEl.appendChild(bookImgEl);

    let bookAuthorNameEl = document.createElement("p");
    bookAuthorNameEl.classList.add("book-autor-name");
    bookAuthorNameEl.textContent = book.author;
    colEl.appendChild(bookAuthorNameEl);
}

function showResultsOnScreen(searchResults) {
    if (searchResults.length === 0) {
        let colEl = document.createElement("div");
        colEl.classList.add("col-12", "text-center");
        rowEl.appendChild(colEl);

        let messageEl = document.createElement("p");
        messageEl.classList.add("message");
        messageEl.textContent = "No results found";
        colEl.appendChild(messageEl);
    } else {
        let colEl = document.createElement("div");
        colEl.classList.add("col-12");
        rowEl.appendChild(colEl);

        let headingEl = document.createElement("h1");
        headingEl.classList.add("message");
        headingEl.textContent = "Popular Books";
        colEl.appendChild(headingEl);

        for (let book of searchResults) {
            createAndAppendBook(book);
        }
    }
}

searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let searchInput = searchInputEl.value;
        if (searchInput === "") {
            alert("Enter Book Title!!");
            return;
        }
        rowEl.textContent = "";
        spinnerEl.classList.toggle("d-none");
        let url = "https://apis.ccbp.in/book-store?title=" + searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                searchResults = jsonData.search_results;
                spinnerEl.classList.toggle("d-none");
                showResultsOnScreen(searchResults);
            });
    }
});