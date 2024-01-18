let form;

function init() {
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        logIn();
        event.preventDefault();
        console.log(json);
    })    
};
window.onload = init;

async function logIn() {
    let username = form.elements.username.value;
    let password = form.elements.password.value;

    json = {
        "username" : username,
        "password" : password
    };
    console.log(username, password);

    let status = await postFetch(json);
}


async function postFetch(){
    fetch
}