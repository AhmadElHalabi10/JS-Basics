document.getElementById("validate").onclick = function () {
  var AGE = document.getElementById("age").value;

  if (AGE > 18) {
    alert("you are over 18");
  } else {
    alert("you are under 18");
  }
};
