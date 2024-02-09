function init() {

}
window.onload = init;

function createAccount() {

    var userName = document.getElementById("userName").value;
    var eMail = document.getElementById("eMail").value;
    var password = document.getElementById("password").value;

    var data = {
        "userName": userName,
        "eMail": eMail,
        "password": password
    }

    console.log(userName);
    console.log(eMail);
    console.log(password);

    fetch("https://localhost:7128/User/CreateUser", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    location.href = "index.html";
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