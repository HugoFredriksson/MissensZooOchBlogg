let form;
let zipCodeInput = document.getElementById("zipcode");
let cityInput = document.getElementById("city");
let addressInput = document.getElementById("address");
let phonenumberInput = document.getElementById("phonenumber");
let emailInput = document.getElementById("email");
let cardnumberInput = document.getElementById("cardnumber");
let dateInput = document.getElementById("date");
let cvvInput = document.getElementById("cvv");

let errorZip = document.getElementById("errorZip");
let errorCity = document.getElementById("errorCity");
let errorAddress = document.getElementById("errorAddress");
let errorPhoneNumber = document.getElementById("errorPhoneNumber");
let errorEmail = document.getElementById("errorEmail");
let errorCardNumber = document.getElementById("errorCardNumber");
let errorDate = document.getElementById("errorDate");
let errorCVV = document.getElementById("errorCVV");


function init() {
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        logIn();
        event.preventDefault();
        console.log(json);
    })    
    zipCodeInput.addEventListener("input", checkZip);
    cityInput.addEventListener("input", checkCity);
    addressInput.addEventListener("input", checkAddress);
    phonenumberInput.addEventListener("input", checkPhoneNumber);
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

function checkZip(){
    let zipCodeValue = zipCodeInput.value.trim();
    let zipCodeRegex = /^\d{5}$|^\d{3}\s\d{2}$/;

    if (zipCodeRegex.test(zipCodeValue)) {
        console.log("Postnummret stämmer!");
        zipCodeInput.style.backgroundColor = "#90EE90"
        errorZip.innerHTML = " ";

      }else {
        console.log("Postnummret är i inkorrekt format!");
        zipCodeInput.style.backgroundColor = "#FFCCCB"
        errorZip.innerHTML = "Postnummret är i fel format!";
      }
}

function checkCity(){
    let cityValue = cityInput.value.trim();
    let cityRegex = /^[a-zA-Z\s-åäö]+$/

    if (cityRegex.test(cityValue)){
        console.log("Orten stämmer!");
        cityInput.style.backgroundColor = "#90EE90"
        errorCity.innerHTML = " ";

      }else {
        console.log("Orten är ogiltlig!");
        cityInput.style.backgroundColor = "#FFCCCB"
        errorCity.innerHTML = "Orten är ogiltlig!";
      }
}

function checkAddress(){
    let addressValue = addressInput.value.trim();
    let addressRegex = /^[a-zA-Z0-9\såäö]+$/;

    if (addressRegex.test(addressValue)){
        console.log("Adressen stämmer!");
        addressInput.style.backgroundColor = "#90EE90"
        errorAddress.innerHTML = " ";

      }else {
        console.log("Adressen är ogiltlig!");
        addressInput.style.backgroundColor = "#FFCCCB"
        errorAddress.innerHTML = "Adressen är ogiltlig!";
      }
}

function checkPhoneNumber() {
    let phonenumberValue = phonenumberInput.value.trim();
    console.log("Inmatat telefonnummer:", phonenumberValue);

    let phonenumberRegex = /^(?:(?:\+|00)46\s*|0)?\s*([1-9][0-9]\s*-*\s*[0-9]{2}\s*-*\s*[0-9]{2}\s*-*\s*[0-9]{2,3})$/;


    if (phonenumberRegex.test(phonenumberValue)) {
        console.log("Telefonnumret stämmer!");
        phonenumberInput.style.backgroundColor = "#90EE90";
        errorPhoneNumber.innerHTML = " ";
    } else {
        console.log("Telefonnumret är ogiltig!");
        phonenumberInput.style.backgroundColor = "#FFCCCB";
        errorPhoneNumber.innerHTML = "Telefonnumret är ogiltig!";
    }
}

