let name = document.querySelector(".name");
let surname = document.querySelector(".surname");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click", function() {
    result.innerHTML = "Здравствуйте, " + name.value + " " + surname.value;
});