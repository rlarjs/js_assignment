function myfunction(){

person = prompt("input your name:");
if(person == null || person =="")
  txt ="User cancelled the prompt.";
else {
  txt = person;
}
document.getElementById("demo").innerHTML = "My name is " + txt;
}
