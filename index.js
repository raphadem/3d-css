let image = document.querySelector(".image-slider img");
console.log(image);
let theta = 0;

function rotate() {
  image.style.transform = `rotateY(${theta}deg)`;
  theta++;
  if (theta >= 360) theta = 0;
  setTimeout(rotate, 10);
}
rotate();
