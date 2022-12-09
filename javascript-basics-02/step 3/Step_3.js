const divv = document.createElement("div");

document.querySelector("body").appendChild(divv).setAttribute("id", "Ahmad");

const DIV = document.querySelector("#Ahmad");

const NAME = document.querySelector("#name");

NAME.addEventListener("keyup", (e) => {
  DIV.innerText = NAME.value;
});
