const signupModal = document.querySelector('.signup-form-wrapper'),
    loginModal = document.querySelector('.login-form-wrapper'),
    signupBtn = document.querySelector('.signup-btn'),
    loginBtn = document.querySelector('.login-btn'),
    signupX = document.querySelector('.signup-x'),
    loginX = document.querySelector('.login-x'),
    formContainer = document.querySelector('.form-container')

signupBtn.addEventListener('click', () => {
    signupModal.classList.add('display')
    formContainer.classList.add('disable')
})

loginBtn.addEventListener('click', () => {
    loginModal.classList.add('display')
    formContainer.classList.add('disable')
})

signupX.addEventListener('click', () => {
    signupModal.classList.remove('display')
    formContainer.classList.remove('disable')
})

loginX.addEventListener('click', () => {
    loginModal.classList.remove('display')
    formContainer.classList.remove('disable')
})