// const X = document.querySelector("#name");
// const Y = document.querySelector("#surname");
// const Z = document.querySelector("#city");

// Z.Z.document.getElementById("button").onclick = function () {
//   document.getElementById("#name").reset();
//   document.getElementById("#surname").reset();
//   document.getElementById("#city").reset();
// };

const N = document.querySelector("#name");
const surN = document.querySelector("#surname");
const C = document.querySelector("#city");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let answer = prompt("Are you sure?  yes/no");
  if (answer == "yes") {
    N.value = surN.value = C.value = "";
  }
});
