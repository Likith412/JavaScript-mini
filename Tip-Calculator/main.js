let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function calculate() {
    if (billAmountElement.value === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else if (percentageTipElement.value === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountElement.value);
        let percentageTip = parseInt(percentageTipElement.value);
        let tipAmount = (percentageTip / 100) * billAmount;
        tipAmountElement.value = tipAmount;
        totalAmountElement.value = billAmount + tipAmount;
    }
}