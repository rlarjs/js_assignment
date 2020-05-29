function myfunction(){

person = prompt("input your name:");
if(person == null || person =="")
  txt ="User cancelled the prompt.";
else {
  txt = "My name is " + person;
}
document.getElementById("demo").innerHTML = txt;
}
