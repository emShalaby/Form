// --------constants----
const form=document.querySelector('form');
const password=document.querySelector('#pass');
const confirmPass=document.querySelector("#confirmPass");
const passError=document.querySelector(".passError");

// ------functions------
function checkPassword(){

    if (password.value!=confirmPass.value && password.value!='') {
    password.style.setProperty("--borderColor","red");
    confirmPass.style.setProperty('--borderColor','red');
    passError.style.display='block';
    
    }

    else{
        password.style.setProperty("--borderColor",'blue');
        confirmPass.style.setProperty('--borderColor','blue')
        passError.style.display='none';
    }
}
// ------events------
password.addEventListener('input',checkPassword);
confirmPass.addEventListener('input',checkPassword);