const form = document.querySelector('#my-form');
const names = document.querySelector('#names');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');
const btn = document.querySelector('#btn');
const password = document.querySelector('#password');

var vailidity = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(names.value === '' || email.value === '' || password.value === ''){
        const message = document.createElement("text");
        message.classList.add("error");
        msg.appendChild(message);
        message.innerText = "Fill all the fields.";
        setTimeout(() => {
            message.remove();   
        }, 3000);
    }
    else{
        if(password.value.length <=8 || !password.value.match(vailidity)){
            const psw = document.createElement("text");
            psw.classList.add("error");
            msg.appendChild(psw);
            psw.innerText = "Enter Valid Password";
            setTimeout(() => {
                psw.remove();
            }, 3000);
        }
        else{
            const li = document.createElement("li");
            const text = document.createTextNode(`Name: ${names.value} || Email: ${email.value}`);
            li.appendChild(text);
            users.appendChild(li);
            names.value='';
            email.value='';
            password.value='';
        }
    }
}



