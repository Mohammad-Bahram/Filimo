let free = document.querySelector(".free-movie_top-list ");
let img = document.querySelectorAll(".hello");
img.forEach((elem) => {
  elem.style.borderRadius = "10px";
  elem.style.transition = "300ms";
});
function freeClick() {
  free.addEventListener("click", function (e) {
    if (e.target.classList.contains("hello")) {
      let clicked = e.target;
      let allFree = document.querySelectorAll(".hello");
      allFree.forEach((elem) => {
        elem.classList.remove("active");
      });
      clicked.classList.add("active");
    }
  });
}

export default {
  freeClick,
  img,
  free,
};
