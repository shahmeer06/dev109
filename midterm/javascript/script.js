function valForm() {
    //if (firstName() && lastName() && email() && Phone_num() && Username())
 console.log("test1");
  if(fullName() && Comm() && email())
    {
      
      return true;
    }
  
        
    
      
      
    
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

function validateFields(){

  var form_res = false;
  
  if(fullName())
    {
      return true;
    }
  document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
  return form_res;
  
}

FullName.addEventListener('blur', fullName, false);
function fullName(){

    var validFullname=false;

 
    var fullname = document.getElementById("FullName").value;
    var errorMessages = "";

  
    if (fullname==="null" || fullname==="" || fullname.length > 60 ) {
        errorMessages += "<p>The Name is required and cannot be greater than 60 characters</p>";
        console.log("Name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in Name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Name invalid — bad characters")
        } else {
                validFullname = true;
                console.log("First name valid");
        }

 
    document.getElementById("fname").innerHTML = errorMessages;

    return (validFirstname);
}

Com.addEventListener('blur', Comm, false);
function Comm(){

    var validComm=false;

 
    var comm = document.getElementById("Com").value;
    var errorMessages = "";

  
    if (comm==="null" || comm==="" || comm.length > 300 ) 
    {
        errorMessages += "<p>The comment is required and cannot be greater than 300 characters</p>";
        console.log("Last name invalid — length")
        
        }
    else 
        {
                validComm = true;
                console.log("Comm valid")
        }

 
    document.getElementById("comment").innerHTML = errorMessages;

    return (validComm);
}

Email.addEventListener('blur', email, false);
function email(){
  var errorMessages="";
  var validEmail = false;
  var userEmail = document.getElementById("Email").value;
var emailPattern = /\S+@\S+\.\S+/;
if (emailPattern.test(userEmail)) {
                validEmail = true;
                console.log("email true");
            } else {
                errorMessages += "<p>Invalid Email</p>";
                console.log("flase email");
            }
  
  document.getElementById("email").innerHTML = errorMessages;
  return validEmail;
  
}
