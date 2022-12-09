document.getElementById("validate").onclick = function () {
  var X = document.getElementById("first_number").value;
  var Y = document.getElementById("second_number").value;
  var Z = X / Y;
  alert(X % Y);
};
