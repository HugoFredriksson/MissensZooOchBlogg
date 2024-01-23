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

let totalPrice;
let displayTotalPrice;

let storedProducts;

function init(){
    allProducts();
    getIdsFromSessionStorage();
    zipCodeInput.addEventListener("input", checkZip);
    cityInput.addEventListener("input", checkCity);
    addressInput.addEventListener("input", checkAddress);
    phonenumberInput.addEventListener("input", checkPhoneNumber);
    emailInput.addEventListener("input", checkEmail);
    cardnumberInput.addEventListener("input", checkCardNumber);
    dateInput.addEventListener("input", checkDate);
    cvvInput.addEventListener("input", checkCVV);
}

window.onload = init;


function allProducts(){
    let div = document.getElementsByTagName("div")[1];
    totalPrice = 0;
    for(let i = 0; i < JSON.length; i++){
        let article = document.createElement("article");
        let product = document.createElement("p");
        product.innerHTML += "Produktnamn: "+  JSON[i].productName;
        let price = document.createElement("p");
        price.innerHTML = "Pris: " + JSON[i].price + " kr";
        article.appendChild(price);
        article.appendChild(product);
        div.appendChild(article);

        totalPrice += Number(JSON[i].price);
        console.log(typeof(totalPrice) + totalPrice);
        displayTotalPrice = document.getElementsByTagName("h3")[0];
        displayTotalPrice.innerHTML = "Totala priset: " + totalPrice;
    }
}

function getIdsFromSessionStorage(){
    storedProducts = JSON.parse(sessionStorage.getItem("products"));

    storedProducts.forEach(productId => {
    console.log("Lagrat produkt-id: ", productId);
    })
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
    let cityRegex = /^[a-zA-Z\s-åäöÅÄÖ]+$/

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
    let addressRegex = /^[a-zA-Z0-9\såäöÅÄÖ]+$/;

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

function checkPhoneNumber(){
    let phonenumberValue = phonenumberInput.value.trim();
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

function checkEmail(){
    let emailValue = emailInput.value.trim();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(emailValue)){
        emailInput.style.backgroundColor = "#90EE90";
        errorEmail.innerHTML = " ";
    } else{
        emailInput.style.backgroundColor = "#FFCCCB";
        errorEmail.innerHTML = "Epostadressen är i felaktigt format!";
    }
}

function checkCardNumber(){
    let cardnumberValue = cardnumberInput.value.trim();
    let cardnumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])?[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    if(cardnumberRegex.test(cardnumberValue)){
        cardnumberInput.style.backgroundColor = "#90EE90";
        errorCardNumber.innerHTML = " ";
    } else{
        cardnumberInput.style.backgroundColor = "#FFCCCB";
        errorCardNumber.innerHTML = "Kortnumret stämmer inte!";
    }
}

function checkDate(){
    let dateValue = dateInput.value.trim();
    let dateRegex = /^(0[1-9]|1[0-2])\/(1[9-9]|2[0-9])$/;

    if(dateRegex.test(dateValue)){
        dateInput.style.backgroundColor = "#90EE90";
        errorDate.innerHTML = " ";
    } else{
        dateInput.style.backgroundColor = "#FFCCCB";
        errorDate.innerHTML = "Månaden är i felaktigt format!";
    }
}

function checkCVV(){
    let cvvValue = cvvInput.value.trim();
    let cvvRegex = /^[0-9]{3}$/;

    if(cvvRegex.test(cvvValue)){
        cvvInput.style.backgroundColor = "#90EE90";
        errorCVV.innerHTML = " ";
    } else{
        cvvInput.style.backgroundColor = "#FFCCCB";
        errorCVV.innerHTML = "CVV-koden är felaktig!";
    }
}