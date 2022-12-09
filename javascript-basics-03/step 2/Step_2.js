const A = document.querySelectorAll("a");
const P = document.getElementById("texte");

A.forEach((a) => {
  a.addEventListener("click", (a) => {
    if (a.target.id == "show") {
      P.style.display = "block";
    } else {
      P.style.display = "none";
    }
  });
});
