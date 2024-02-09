let userArray = []
let userId;
let button = document.getElementById("userFromIdButton");
let inputUserId = document.getElementById("inputGetUserFromId");

function init(){
    button.addEventListener("click", event => {
        event.preventDefault();
        console.log("click!");
        if(inputUserId.value != ""){
            console.log("unlcikl");
            GetUsers();
        }
    })
}
window.onload = init();

async function GetUsersFetch(){

    userId = inputUserId.value;
 

    let path = "https://localhost:7128/User/GetUserFrom/"+userId;
    let response = await fetch(path, {
        method: "GET",
        mode: "cors",
        headers:{
          "Content-Type":"application/json",
          "Authorization": localStorage.getItem("GUID")
        }
    });
    console.log(response);
    userArray = response.json();
    return userArray;
}

async function GetUsers(){
    userArray = await GetUsersFetch();
    console.log(userArray);
}