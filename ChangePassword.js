function init() {

}
window.onload = init;

async function getUserIdFetch(){
    let path = "https://localhost:7128/User/VerifyUserId";
    let response = await fetch(path, {
        method: "GET",
        mode: "cors",
        headers:{
            "Content-Type":"application/json",
            "Authorization": localStorage.getItem("GUID")
        }
    });
    userId = await response.text();
    console.log("AnvändarID: " + userId);
    return userId;
}

async function changePassword() {
    await getUserIdFetch();
    var password = document.getElementById("password").value;
    console.log(password);
    console.log(userId);
    var data = {
        "password": password,
        "id": userId
    };

    console.log(password);

    fetch('https://localhost:7128/User/UpdatePassword', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem("GUID")
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
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

function passwordToggler1(){
    let passwordInput = document.getElementById("password");
    
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "password";
    }
}

function passwordToggler2(){
    let passwordInput = document.getElementById("repeatpassword");
    
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "password";
    }
}