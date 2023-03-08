const form=document.querySelector('form');
const password=document.querySelector('#pass')
const confirmPass=document.querySelector("#confirmPass")

function checkPassword(){


    if (password.value!=confirmPass.value) {
    password.style.setProperty("--borderColor","red");
    confirmPass.style.setProperty('--borderColor','red');
    }
    else{
        password.style.setProperty("--borderColor",'blue');
        confirmPass.style.setProperty('--borderColor','blue')
    }
}
password.addEventListener('input',checkPassword);
confirmPass.addEventListener('input',checkPassword);