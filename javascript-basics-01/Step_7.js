document.getElementById("validate").onclick = function () {
  var X = document.getElementById("shoe_size").value;
  var Y = document.getElementById("year").value;
  document.getElementById("validate");
  var S1 = (X * 2 + 5) * 50 - Y + 1766;

  alert(S1);
};
