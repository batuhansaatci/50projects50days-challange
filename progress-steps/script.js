const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const steps = document.querySelectorAll(".step");
const progress = document.querySelector(".progress");

let actives = 1;

next.addEventListener("click", () => {
  actives++;
  steps.forEach((circle, i) => {
    if (i < actives) {
      circle.classList.add("active");
      progress.style.width = (actives - 1) * 33 + "%";
    }
  });
});

prev.addEventListener("click", () => {
  actives--;
  steps.forEach((circle, i) => {
    if (i > actives) {
      circle.classList.remove("active");
      progress.style.width = actives * 33 + "%";
    }
  });
});
