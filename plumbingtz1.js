/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction(topnav) {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  




   

function loginPage(form) {
if (form.userName.value=="username") { 
if (form.passWord.value=="password") {              
location="home.html" 
} else {
alert("Incorrect detail Password")
}
} else {  alert("Incorrect detail Username")
}
}