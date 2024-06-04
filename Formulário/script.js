const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const date = document.getElementById('date');
const btn = document.getElementById('btn');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    if (validateInputs()) {
        alert('Você se cadastrou com sucesso!')
    }

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')

}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const dateValue = date.value.trim();


    if(usernameValue === '') {
        setError(username, 'Por favor, digite seu nome completo');
        return
    } else {
       setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Por favor, digite seu e-mail')
        return
    } else if (!validateEmail(emailValue)){
        setError(email, 'Por favor, digite um e-email válido')
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Por favor, digite sua senha');
        return
    } else if (passwordValue.length < 8) {
        setError(password, 'Por favor, a senha deve ter no minimo 8 caracteres')
        return
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Por favor, digite sua senha novamente');
        return
    } else if (password2Value !== passwordValue) {
        setError(password2, 'As senhas não são iguais');
    } else {
        setSuccess(password2);
    }

    if(!dateValue) {
        setError(date, 'Por favor, digite sua data de nascimento')
        return
    } else {
        setSuccess(date);
    }
    
    if(!check.checked) {
        setError(check, 'Termos obrigatórios')
        return
    } else {
        setSuccess(check);
    }

    return true;
};



