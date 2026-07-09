const button = document.getElementById("myButton");
console.log(button);

const message = document.getElementById("message");

button.addEventListener("click", function() {
    console.log("Button was clicked!");
    message.textContent = "You clicked it!";
});