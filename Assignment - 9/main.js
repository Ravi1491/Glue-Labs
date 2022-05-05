const container = document.getElementById("container");
const API_URL = 'https://www.breakingbadapi.com/api/characters';

async function api(){
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    createUserCard(data);
}

function createUserCard(data){
    data.forEach(function(value){
        const card = document.createElement("div");
        card.classList.add("card");
        const img = value.img;
        const name = value.name;
        const birthday = value.birthday;
        const status = value.status;
        const nickname = value.nickname;

        const occupation = `${value.occupation[0]}`;


        const portrayed = value.portrayed;
        const category = value.category;
        const btcs = value.better_call_saul_appearance;
        let btcs1;
        if(btcs.length==0){
            btcs1="No";
        }
        else{
            btcs1=btcs.toString();
        }
        console.log(name);
        const cardHtml = `
        <div id="innerCard">
            <img src="${img}" alt="">
            <h3>Name: ${name}</h3>
            <p><strong>Nickname:</strong> ${nickname}</p>
            <p><strong>Birthday:</strong> ${birthday}</p>
            <p><strong>Occupation:</strong> ${occupation}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Portrayed:</strong> ${portrayed}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Better_call_saul_appearance:</strong> ${btcs1}</p>
        </div>
        `
        card.innerHTML = cardHtml;
        container.appendChild(card);
    })
}

api();