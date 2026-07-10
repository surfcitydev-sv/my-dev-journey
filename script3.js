const button = document.getElementById("tipBtn");

const message = document.getElementById("tipMessage");
button.addEventListener("click", function () {
    message.textContent = "Suggested tip: 18%";
    console.log(message);
})