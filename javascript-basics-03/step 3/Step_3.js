const divCol = document.querySelectorAll(".color");
const P = document.querySelector("p");

divCol.forEach((a) => {
  console.log(a);

  a.addEventListener("click", () => {
    let color = a.getAttribute("class").split(" ")[1];
    P.style.color = color;
  });
});
