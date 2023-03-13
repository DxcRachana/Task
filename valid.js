function myFunction() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var filter = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if(email.match(filter)){
       
    if(password.length < 8) {  
         document.getElementById("password").innerHTML; /**Password length must be atleast 8 characters*/  
         alert("Invalid password");
         return;  
      }  
      
    //maximum length of password validation  
      else if(password.length > 15) {  
         document.getElementById("password").innerHTML /**Password length must not exceed 15 characters*/  
         alert("Invalid password");
         return;  
      } 
      else{
        
        window.location.href="home.html";
      }

    }
    else{
      alert("Invalid Email Id");
      return;
    }
    
 }