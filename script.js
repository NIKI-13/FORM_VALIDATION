const form = document.getElementById('form');
const passw1El = document.getElementById('password1');
const passw2El = document.getElementById('password2');
const msgContainer = document.querySelector('.msg-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;

function validateForm(){
    // USING CONSTRAINT API
    isValid = form.checkValidity();
    // STYLE MAIN MSG FOR AN ERROR
    if (!isValid){
        message.textContent = 'Please fill out all the fields.';
        message.style.color = 'red';
        msgContainer.style.borderColor = 'red';
        return;
    }

    // CHECK IF PASSWORDS MATCH
    if (passw1El.value === passw2El.value){
        passwordsMatch = true;
        passw1El.style.borderColor = 'green';
        passw2El.style.borderColor = 'green';
    }
    else{
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        msgContainer.style.borderColor = 'red';
        passw1El.style.borderColor = 'red';
        passw2El.style.borderColor = 'red';
        return;
    }
    // IF FORM IS VALID & PASSWORDS MATCH
    if (isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        msgContainer.style.borderColor = 'green';
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // DO SOMETHING WITH USER DATA
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    // VALIDATE FORM
    validateForm();
    // SUBMIT DATE IF VALID
    if (isValid && passwordsMatch){
        storeFormData();
    }
}


// EVENT LISTENER
form.addEventListener('submit', processFormData);

