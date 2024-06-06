let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");
let addButtonEl = document.getElementById("addBtn");

let reviewsContainerEl = document.getElementById("reviewsContainer");

function onCreateAndAddReview() {
    let movieTitle = titleInputEl.value;
    let movieReview = reviewTextareaEl.value;
    if (movieTitle === "") {
        alert("Enter the Movie Title");
        return;
    }

    let movieTitleEl = document.createElement("h1");
    movieTitleEl.textContent = "Movie Title: " + movieTitle;
    movieTitleEl.classList.add("movie-title");
    reviewsContainerEl.appendChild(movieTitleEl);

    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = "Review: " + movieReview;
    movieReviewEl.classList.add("movie-review");
    reviewsContainerEl.appendChild(movieReviewEl);

    let horizontalLineEl = document.createElement("hr");
    reviewsContainerEl.appendChild(horizontalLineEl);

    titleInputEl.value = "";
    reviewTextareaEl.value = "";
}

addButtonEl.onclick = function() {
    onCreateAndAddReview();
}