const form = document.querySelector('form')
const username = document.querySelector('#UsernameField')
const password = document.querySelector('#PasswordField')
const confirmPass = document.querySelector('#ConfirmPasswordField')
const button = document.querySelector('#ButtonSubmit')
const regex = {
    password: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,16}$/,
    username: /^[-\w\.\$\*\!]{3,30}$/
}

const errors = {
    username: document.querySelector('.NameError'),
    password: document.querySelector('.PassError'),
    confirmPass: document.querySelector('.CPError')
}

function validateRegister() {
    if (!validateUsername()) {
        button.disabled = true
        return errors.username.innerHTML = "O nome de usuário não segue às regras!"
    } else errors.username.innerHTML = ""

    if (!validatePassword()) {
        button.disabled = true
        return errors.password.innerHTML = "Sua senha não segue os padrões de segurança!"
    } else errors.password.innerHTML = ""

    if (!combiningPassword()) {
        button.disabled = true
        return errors.confirmPass.innerHTML = "Às senhas não combinam!"
    } else errors.confirmPass.innerHTML = ""

    return button.disabled = false
}

function validateUsername() {
    if (username.value.match(regex.username)) return true
    return false
}

function validatePassword() {
    if (password.value.match(regex.password)) return true
    return false
}

function combiningPassword() {
    if (password.value === confirmPass.value) return true
    return false
}

username.addEventListener('keyup', validateRegister)
password.addEventListener('keyup', validateRegister)
confirmPass.addEventListener('keyup', validateRegister)