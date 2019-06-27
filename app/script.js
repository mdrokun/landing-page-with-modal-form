const signinBtn = document.querySelector('.signin-btn'),
    signinModal = document.querySelector('.login-form'),
    loginX = document.querySelector('.login-x'),
    joinBtn = document.querySelector('.join-btn'),
    joinModal = document.querySelector('.signup-form'),
    signupX = document.querySelector('.signup-x'),
    formContainer = document.querySelector('.form-container')

signinBtn.addEventListener('click', () => {
    signinModal.classList.add('display-modal')
    formContainer.classList.add('disable')
})

loginX.addEventListener('click', () => {
    signinModal.classList.remove('display-modal')
    formContainer.classList.remove('disable')
})

joinBtn.addEventListener('click', () => {
    joinModal.classList.add('display-modal')
    formContainer.classList.add('disable')
})

signupX.addEventListener('click', () => {
    joinModal.classList.remove('display-modal')
    formContainer.classList.remove('disable')
})

window.addEventListener("DOMContentLoaded", function (e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function (e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }

}, false);