// document.getElementById("image1").onclick = function () {
//   x = document.getElementById("image1").src = "./images/image1_2.jpg";
// };

const image = document.querySelector("#image1");

image.addEventListener("mouseover", (e) => {
  e.target.src = "images/image1_2.jpg";
});
