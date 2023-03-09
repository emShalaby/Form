// --------constants----
const form=document.querySelector('form');
const password=document.querySelector('#pass');
const confirmPass=document.querySelector("#confirmPass");
const passError=document.querySelector(".passError");
const loginBtn=document.querySelector("#loginBtn");
const loginModal=document.querySelector("#loginModal");
const closeBtn=document.querySelector(".closeBtn");

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

function loginMenu(){
    loginModal.style.display='flex';
}
function outsideClick(e){
    if(e.target==loginModal){
        loginModal.style.display='none';
    }
}

// ------events------
password.addEventListener('input',checkPassword);
confirmPass.addEventListener('input',checkPassword);
loginBtn.addEventListener('click',loginMenu);
window.addEventListener('click',outsideClick);
closeBtn.addEventListener('click',()=>loginModal.style.display='none');
