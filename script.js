let count = document.getElementById("count");

let button = document.getElementsByClassName("button")[0];

let button2 = document.getElementsByClassName("button")[1];

button.addEventListener("click", function() {
    count.textContent = Number(count.textContent) + 1;
});

button2.addEventListener("click", function() {
    count.textContent = Number(count.textContent) - 1;
});

