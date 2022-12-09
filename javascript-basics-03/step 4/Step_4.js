const pass = document.querySelector("#password");
const conf = document.querySelector("#confirmation");
const butt = document.querySelector("button");

butt.addEventListener("click", (a) => {
  if (pass.value != conf.value) {
    pass.style.border = "1px solid red";
    conf.style.border = "1px solid red";
  }
});
