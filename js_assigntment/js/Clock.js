function mytimer() {
  var d = new Date();
  var n = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = n;
}
