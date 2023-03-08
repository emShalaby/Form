const form=document.querySelector('form');
const passwordField=document.querySelector('#pass')

function checkPassword(){
    const password=form.password.value
    const confirmPass=form.confirmPass.value

    if (password!=confirmPass) {
    passwordField.style.setProperty("--borderColor","red");
    }; 
}
passwordField.addEventListener('input',checkPassword);
