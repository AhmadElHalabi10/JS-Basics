document.getElementById("validate").onclick = function () {
  var X = document.getElementById("name").value;
  var Y = document.getElementById("surname").value;
  var Z = document.getElementById("city").value;

  alert("Nom : " + X + "\nPrénom : " + Y + "\nVille : " + Z);
};
