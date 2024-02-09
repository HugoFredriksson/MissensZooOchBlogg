let userId;
let inputPostadress = document.getElementById("postadress");
let badInput = true;
let form;
let updateAdressButton;

function init(){
    inputPostadress.addEventListener("input", checkPostAdress);
    form = document.querySelector("form");
    getUserId();



    console.log(updateAdressButton);

    form.addEventListener("submit", event =>{
        event.preventDefault();
        updateAdress();
    })




}
window.onload = init();

function updateAdress(){
    checkPostAdress()
    if(badInput === false){
        let path = "https://localhost:7128/User/UpdateUserPostAdress";
        let postAdress = document.getElementById("postadress").value;
        console.log(postAdress);
        var data = {
            "id": userId,
            "postAdress": postAdress      
        }
        console.log("DATA HÄÄÄÄR!!!!:")
        console.log(data);

        fetch(path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("GUID")
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        
        })
        .then(data => {
       
            alert(data); 
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
    }    
}


async function getUserId() {
    await getUserIdFetch();
}

async function getUserIdFetch() {
    let path = "https://localhost:7128/User/VerifyUserId";
    let response = await fetch(path, {
        headers: {
            "Authorization": localStorage.getItem("GUID"),
        },
    });
    userId = await response.text();
    console.log("userId " + userId);
    return userId;
}

function checkPostAdress(){
    let postAdressValue = inputPostadress.value.trim();
    let postAdressRegex = /^\s*\S+(?:\s+\S+){2}(\s)?[a-zåäöA-ZÅÄÖ]{1,25}(\s)?[a-zåäöA-ZÅÄÖ]{1,25}$/;

    if(postAdressRegex.test(postAdressValue)){
        console.log("Postadressen är i korrekt format");
        inputPostadress.style.backgroundColor = "#90EE90";
        badInput = false;

    } else{
        inputPostadress.style.backgroundColor = "#FFCCCB";
        console.log("Postadressen är i fel format!");
        badInput = true;
        return badInput
    }
}