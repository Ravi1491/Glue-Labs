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




































// const form = document.getElementById("my-form");
// const names = document.getElementById('name');
// const email = document.getElementById('email');
// const psw = document.getElementById("password");
// const msg = document.getElementsByClassName("msg");
// const userDetail = document.getElementById("users");
// const submit = document.getElementById("btn1");

// form.addEventListener("submit", function (e){
//   e.preventDefault();
//   if(names.value === '' || email.value === '' || psw.value === ''){
//       console.log(psw.value);
//       const msg3 = document.createElement("text");
//         msg3.classList.add("error");
//         msg.appendChild(msg3);
//         msg3.innerText = 'All Fields Mandatory';
//         setTimeout(() => msg3.remove(), 3000);
//     }
//     else{
//         const li = document.createElement("li");
//         li.innerHTML = `Name: ${names.value} ||  email: ${email.value}`;
//         userDetail.appendChild(li);
//         names.value = '';
//         email.value = '';
//         psw.value = ''; 
//     }
// });
