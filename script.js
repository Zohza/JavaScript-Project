if (window.location.pathname.includes('teacher_login.html')){
   const loginBtn = document.getElementById('login');
const userName = "admin";
const password = "admin123";


clearForm = () =>{
    document.getElementById("username").value="";
     document.getElementById("password").value="";
}



loginBtn.addEventListener('click', ()=>{
   const invalid = document.getElementById('invalidDetails');
   const teacherName = document.getElementById("username").value.trim();
   const teacherPassword =document.getElementById("password").value.trim();
   if (teacherName !== userName || teacherPassword!==password){
    invalid.textContent="Incorrect Details";
    invalid.style.backgroundColor= 'white';
    invalid.style.color='red';
  
   }else{
    invalid.textContent="Login Successful";
    invalid.style.color='green';
    invalid.style.backgroundColor= 'white';
   

    setTimeout(()=> {
      window.location.href ="../html/admin.html"
    }, 2000)
   
   }
   clearForm();
   
})




let eyeicon =document.getElementById("eye-close");
let passWord =document.getElementById("password");
eyeicon.onclick = function(){
      if (passWord.type == "password"){
         passWord.type ="text";
         eyeicon.src = "../css/eye-removebg-preview.png"
         
      }else{
           passWord.type ="password";
           eyeicon.src = "../css/close-eye.png"
      }
}

let studentLoginButton = document.getElementById('student-login');
setTimeout(() =>{
   studentLoginButton.addEventListener('click', ()=>{
   window.location.href="../html/student-login.html"
})
},2000)
}


///// student login js

if(window.location.pathname.includes('student-login.html')){
      const studentloginBtn = document.getElementById('login');
      const userEmail = "alice@example.com";
      const password = "student123";

        clearForm = () =>{
      document.getElementById("email").value="";
      document.getElementById("password").value="";
   }



   studentloginBtn.addEventListener('click', ()=>{
      const invalid = document.getElementById('invalidDetails');
      const studentEmail = document.getElementById("email").value.trim();
      const studentPassword =document.getElementById("password").value.trim();
      if (studentEmail !== userEmail || studentPassword!==password){
      invalid.textContent="Incorrect Details";
      invalid.style.backgroundColor= 'white';
      invalid.style.color='red';
   
      }else{
      invalid.textContent="Login Successful";
      invalid.style.color='green';
      invalid.style.backgroundColor= 'white';
      

      setTimeOut(()=> {
         window.location.href ="../html/student.html"
      }, 1000)
      
      }
      clearForm();
      
   })

   let eyeicon =document.getElementById("eye-close");
   let passWord =document.getElementById("password");
   eyeicon.onclick = function(){
         if (passWord.type == "password"){
            passWord.type ="text";
            eyeicon.src = "../css/eye-removebg-preview.png"
            
         }else{
            passWord.type ="password";
            eyeicon.src = "../css/close-eye.png"
         }
   }

   let teacherLoginButton = document.getElementById('teacher-login');
setTimeout(() =>{
   teacherLoginButton.addEventListener('click', ()=>{
   window.location.href="../html/teacher_login.html"
})
},1000)
}

//js for admin.html
if (windows.location.pathname.includes('admin.html')){
   
}