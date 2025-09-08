let imageContainer = document.querySelector(".image-container");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let x = 0;
let timer;

prev.addEventListener("click", () => {
  x += 45;
  clearTimeout(timer);
  updateGallery();
});
next.addEventListener("click", () => {
  x -= 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x -= 45;
    updateGallery();
  }, 1000);
}

updateGallery();
