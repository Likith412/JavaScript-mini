let cartItemsContainer = document.getElementById("cartItemsContainer");
let inputElement = document.getElementById("cartItemTextInput");
let addButtonEl = document.getElementById("addBtn");

addButtonEl.onclick = function() {
    let cartItem = document.createElement("li");
    cartItem.textContent = inputElement.value;
    cartItemsContainer.appendChild(cartItem);
};