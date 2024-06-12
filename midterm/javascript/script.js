function valForm() {
    //if (firstName() && lastName() && email() && Phone_num() && Username())
 console.log("here");
  if(NamesCheck() && email() && comment())
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
  console.log("check");
  if(NamesCheck() && email() && comment())
    {
      return true;
    }
  return form_res;
  
}

Names.addEventListener('blur', NamesCheck, false);
function NamesCheck(){

    var validName=false;

 
    var names = document.getElementById("Name").value;
    var errorMessages = "";

  
    if (names==="null" || names==="" || names.length > 60 ) {
        errorMessages += "<p>Name is required and cannot be greater than 60 characters</p>";
        console.log("First name invalid — length")
        } else if (names.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validName = true;
                console.log(name);
        }

 
    document.getElementById("Names99").innerHTML = errorMessages;

    return (validName);
}


email.addEventListener('blur', email, false);
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

Comment.addEventListener('blur', comment, false);
function comment(){
  
   var validComm=false;

 
    var comm = document.getElementById("comment").value;
    var errorMessages = "";
  
if (comm==="null" || comm==="" || comm.length > 300) 
    {
        errorMessages += "<p>The comment is required and cannot be greater than 300 characters</p>";
       
        
        }
   
    else 
        {
                validComm = true;
                console.log("Last name valid")
        }
  
  document.getElementById("comment").innerHTML = errorMessages;
  return validComm;
  
}
