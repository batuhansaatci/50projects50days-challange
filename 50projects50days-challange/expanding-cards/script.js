"use strict";
// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"

const imgs = document.querySelectorAll(".img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    removeActive();
    img.classList.add("active");
  });
});

function removeActive() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
}
