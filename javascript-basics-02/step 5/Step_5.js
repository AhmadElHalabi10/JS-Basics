// let Element1 = document.querySelector("#image1");
// let Element2 = document.querySelector("#image2");
// let Element3 = document.querySelector("#image3");
// let Element4 = document.querySelector("#image4");
// let Element5 = document.querySelector("#image5");

// Element1.addEventListener("mouseover", function () {
//   image1.src = "images/image1_2.jpg";
// });

// Element2.addEventListener("mouseover", function () {
//   image2.src = "images/image2_2.jpg";
// });

// Element3.addEventListener("mouseover", function () {
//   image3.src = "images/image3_2.jpg";
// });

// Element4.addEventListener("mouseover", function () {
//   image4.src = "images/image4_2.jpg";
// });

// Element5.addEventListener("mouseover", function () {
//   image5.src = "images/image5_2.jpg";
// });

const X = document.querySelectorAll("img");

X.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    e.target.src = `images/${e.target.id}_2.jpg`;
  });
});
