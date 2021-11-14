// get reference for button
let button = document.querySelector("button");
let pikachu = document.querySelector("img");

button.onclick = function(event) {
    event.preventDefault();

    pikachu.style.animation = "moveRight 3s linear infinite";
}