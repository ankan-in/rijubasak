function eee(id, error) {
var element = document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML = error; 

} 
   function validateform() {
   var returnval = true;
   var fname = document.forms['myForm']['user-fname'].value;
   
   
   if (fname.length < 4) {  
    eee("name", "*Length of name is too short. Minimum is 4");
    returnval = false;
   }
   if (fname.length == 0) {  
    eee("name", "*Name cant be set blank");
    returnval = false;
   }
   
   var lname = document.forms['myForm']['user-lname'].value;
   
   if (lname.length == 0) {  
    eee("lastname", "*Name cant be set blank");
    returnval = false;
   }
   
   var email = document.forms['myForm']['user-email'].value;
   
   if (email.length == 0) {  
    eee("email", "*Email cant be set blank");
    returnval = false;
   }
   var pass = document.forms['myForm']['user-pass'].value;
   
   if (pass.length == 0) {  
    eee("password", "*Enter your password properly");
    returnval = false;
   }
   if (pass.length < 7) {  
    eee("password", "*Password must be of 7 digits");
    returnval = false;
   }
   
   var cpass = document.forms['myForm']['user-cpass'].value;
   
   if (cpass.length == 0) {  
    eee("cpassword", "*You need to verify your password");
    returnval = false;
   }

   if (cpass != pass) {
       alert("PASSWORD DIDNT MATHCED. YOU NEED TO FILL CONFIRM PASSWORD FIELD AGAIN!");
       returnval = false;
   } 




   var msg = document.forms['myForm']['user-msg'].value;
   
   if (msg.length < 10) {  
    eee("message", "*Write atleast 10 letters.");
    returnval = false;
   }
   // pass

 
   return returnval;

   
   }