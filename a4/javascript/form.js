function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid

var validFirstname=false;
var validLastname=false;
  
  
  
  
//2) create variables to read the values from html text inputs
var firstname = document.getElementById("FirstName").value;
var lastname = document.getElementById("LastName").value;
  
  
  
  
//3) do the validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;
  
  
if (lastname==="null" || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
else
   validLastname = true;
  
  
  
//4) send error messages 

document.getElementById("errorMessages").innerHTML = errorMessages;  
  
  
//5) return the status of each field

return (validFirstname && validLastname);
  
  
}
