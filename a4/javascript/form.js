function valForm() {
    //if (firstName() && lastName() && email() && Phone_num() && Username())
 
  if(firstName() && lastName() && email() && Phone_num() && Username() && password() && address() && zip())
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
  
  if(firstName() && lastName() && email() && Phone_num && Username())
    {
      return true;
    }
  return form_res;
  
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
}

LastName.addEventListener('blur', lastName, false);
function lastName(){

    var validLastname=false;

 
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

  
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) 
    {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        
        }
    else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) 
    {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } 
    else 
        {
                validLastname = true;
                console.log("Last name valid")
        }

 
    document.getElementById("lname").innerHTML = errorMessages;

    return (validLastname);
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
Phone.addEventListener('blur', Phone_num, false);
function Phone_num(){
  var validPhone = false;
  var errorMessages="";
  
 var phone = document.getElementById("Phone").value;
if (isNaN(phone) || phone.length >15 || phone===null || phone===""){
     errorMessages += "<p>Invalid Phone Number</p>";
    console.log("phone false"); }
else{
  validPhone = true;
  console.log("phone true");
  }
document.getElementById("pnum").innerHTML = errorMessages;
return validPhone;
}

Username.addEventListener('blur', username, false);

function username(){

  var validUsername=false;

 
    var user = document.getElementById("Username").value;
    var errorMessages = "";

  
    if (user==="null" || user==="" || user.length > 12 ) {
        errorMessages += "<p>The user name is required and cannot be greater than 12 characters</p>";
        console.log("user name invalid — length")
        
        } else {
                validUsername = true;
                console.log("User name valid")

}
  

  document.getElementById("uname").innerHTML = errorMessages;

    return (validUsername);
  
}

Password.addEventListener('blur', password, false);

function password(){

  var validPass=false;

 
    var pass = document.getElementById("Password").value;
    var errorMessages = "";

  
    if (pass==="null" || pass==="" || pass.length > 7 ) {
        errorMessages += "<p>The Password is required and cannot be greater than 7 characters</p>";
        console.log("password invalid — length")
        
        } else {
                validPass = true;
                console.log("Password valid")

}

document.getElementById("pword").innerHTML = errorMessages;

    return (validPass);
  
  
}

Address.addEventListener('blur', address, false);

function address(){

  var validAdd=false;

 
    var addy = document.getElementById("Address").value;
    var errorMessages = "";

  
    if (addy==="null" || addy==="") {
        errorMessages += "<p>The Address is required</p>";
        console.log("address invalid — length")
        
        } else {
                validAdd = true;
                console.log("Address valid")

}

document.getElementById("addy").innerHTML = errorMessages;

    return (validAdd);
  
  
}

City.addEventListener('blur', city, false);

function city(){

  var validCity=false;

 
    var city_user = document.getElementById("City").value;
    var errorMessages = "";

  
    if (city_user==="null" || city_user==="") {
        errorMessages += "<p>The City is required</p>";
        console.log("city invalid — length")
        
        } else {
                validAdd = true;
                console.log("City valid")

}

document.getElementById("city").innerHTML = errorMessages;

    return (validAdd);
  
  
}

State.addEventListener('blur', state, false);

function state(){

  var state_user = document.getElementById("State").value;
    var errorMessages = "";
  
   if (state_user==="null" || state_user==="") {
        errorMessages += "<p>The State is required</p>";
        console.log("state invalid — length")
        
        } else {
                validAdd = true;
                console.log("State valid")
  
        }
}


Zip.addEventListener('blur', zip, false);
function zip(){
  
  var country = document.getElementById("Country").value;
  var zip_user = document.getElementById("Zip").value;
  var validZip=false;
  
  if (country ==="USA"){
    if(zip_user ==="null" || zip_user.length>5){
      
      errorMessages += "<p>Invalid Zip code Length</p>";
      
      
    } 
    else{
      
      validZip = true;
      
    }
    
    
}
  
  
  document.getElementById("country").innerHTML = errorMessages;

    return (validZip);
  
  
}






