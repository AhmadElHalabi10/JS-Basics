const X = document.querySelectorAll("img");

X.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    e.target.src = `images/${e.target.id}_2.jpg`;
  });

  e.addEventListener("mouseout", (e) => {
    e.target.src = `images/${e.target.id}.jpg`;
  });
});
