const button = document.getElementById("discountBtn");
console.log(button);

const message = document.getElementById("discountMessage");

button.addEventListener("click", function() {
    message.textContent = "10% off your next order"
    console.log("Discount shown!");
});