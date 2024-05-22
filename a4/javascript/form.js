function valForm() {
    if (firstName() && lastName() && email()
        
    )
      
      
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){

    var validFirstname=false;

 
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

  
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        }

 
    document.getElementById("fname").innerHTML = errorMessages;

    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);
function lastName(){

    var validLastname=false;

 
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

  
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("Last name valid")
        }

 
    document.getElementById("lname").innerHTML = errorMessages;

    return (validLastname);
}

Email.addEventListener('blur', email, false);
function email(){
  var validEmail = false;
  var userEmail = document.getElementById("Email").value;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (emailPattern.test(userEmail)) {
                validEmail = true;
            } else {
                errorMessages += "<p>Invalid Email</p>";
            }
}
Phone.addEventListener('blur', phone, false);
function Phone(){
  var validPhone = false;
  
 var phone = document.getElementById("Phone").value;
if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
     errorMessages += "<p>Invalid Email</p>";
else
  validPhone = true;

}


