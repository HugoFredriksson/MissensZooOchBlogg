let allPrices = [];
let totalPrice = 0;
let badInput = false;

// NEEDS INPUTFIELD FOR NAME AND CITY!!!!!!

let recipientNameInput = document.getElementById("recipientName");
let countryInput = document.getElementById("country");
let zipCodeInput = document.getElementById("zipcode");
let cityInput = document.getElementById("city");
let addressInput = document.getElementById("address");
let phonenumberInput = document.getElementById("phonenumber");
let emailInput = document.getElementById("email");
let cardnumberInput = document.getElementById("cardnumber");
let dateInput = document.getElementById("date");
let cvvInput = document.getElementById("cvv");

let errorRecipientName = document.getElementById("errorRecipientName");
let errorCountry = document.getElementById("errorCountry");
let errorZip = document.getElementById("errorZip");
let errorCity = document.getElementById("errorCity");
let errorAddress = document.getElementById("errorAddress");
let errorPhoneNumber = document.getElementById("errorPhoneNumber");
let errorEmail = document.getElementById("errorEmail");
let errorCardNumber = document.getElementById("errorCardNumber");
let errorDate = document.getElementById("errorDate");
let errorCVV = document.getElementById("errorCVV");
let cartProducts;
let cartInfo;


let priceDiv = document.getElementsByTagName("div")[1];
let productDiv = document.getElementsByTagName("div")[2];
let formDiv = document.getElementsByTagName("form")[0];

let form;
let userId;
let role;
function init(){
    
    recipientNameInput.addEventListener("input", checkRecipientName);
    countryInput.addEventListener("input", checkCountry);
    zipCodeInput.addEventListener("input", checkZip);
    cityInput.addEventListener("input", checkCity);
    addressInput.addEventListener("input", checkAddress);
    phonenumberInput.addEventListener("input", checkPhoneNumber);
    emailInput.addEventListener("input", checkEmail);
    cardnumberInput.addEventListener("input", checkCardNumber);
    dateInput.addEventListener("input", checkDate);
    cvvInput.addEventListener("input", checkCVV);


    verify();
    getUserIdFetch();
    
    form = document.querySelector("form");

    form.addEventListener("submit", event => {
        checkInputFields();

        if(badInput === false){
            console.log("input fields are correct!");
            createOrder();
            event.preventDefault();
        } else{
            console.log("input fields are incorrect! ): ");
            badInput = false;
            event.preventDefault();
        }
        event.preventDefault();
    })
}
window.onload = init;

async function productsFetch(){
    cartProducts = await getProductsFetch();
    createCartProducts(cartProducts)      
}

async function removeCartItem(cartInfo){
    console.log("Tar bort kundvagnsitem " + cartInfo.id);

    let path = "https://localhost:7128/Cart/DeleteProductFromCart/" + cartInfo.id;
    
    let response = await fetch(path, {
        method: "DELETE",
        mode: "cors",
        headers:{
          "Content-Type":"application/json",
          "Authorization": localStorage.getItem("GUID")
        }
    });
    console.log(response);
    location.reload();

}

function calculateTotalPrice(allPrices){
    totalPrice = 0;
    console.log(allPrices);
    allPrices.forEach(each => {
        totalPrice+=each;
    });
    console.log(totalPrice);
    return totalPrice;
}

function createCartProducts(cartProducts){
    cartProducts.forEach(cartInfo =>{
        const article = document.createElement("article");
        productDiv.appendChild(article);
        const p = document.createElement("p");
        const removeCartItemButton = document.createElement("a");

        const totalPricePerProduct = cartInfo.price * cartInfo.quantity;
        allPrices.push(totalPricePerProduct);

        p.textContent = cartInfo.name + " " + " x " + cartInfo.quantity + " totalt " + totalPricePerProduct + " SEK";
        article.appendChild(p);
        removeCartItemButton.textContent = "❌";
        removeCartItemButton.title = "Ta bort product";
        removeCartItemButton.addEventListener("click", event =>{
            removeCartItem(cartInfo);
        })
        p.appendChild(removeCartItemButton);
    });
    const article = document.createElement("article");
    priceDiv.appendChild(article);
    const p = document.createElement("p");

    calculateTotalPrice(allPrices);

    p.textContent = "Ditt totala pris är: " + totalPrice;
    article.appendChild(p);

    if(cartProducts.length === 0){
        formDiv.style.visibility = "hidden";
    }
}

function checkInputFields(){
    checkRecipientName();
    console.log(badInput);
    if(badInput === true){
        
        console.log("Check recipientName är i falskt format!");
        return badInput;
    }

    checkCountry();
    console.log(badInput);
    if(badInput === true){
        console.log("Check country är i falskt format!");
        return badInput;
    }
    
    checkZip();
    if(badInput === true){
        console.log("Check zip är i falskt format!");
        return badInput;
    }

    checkCity();
    if(badInput === true){
        console.log("Check city är i falskt format!");
        return badInput;
    }

    checkAddress();
    if(badInput === true){
        console.log("Check Adress är i falskt format!");
        return badInput;
    }

    checkPhoneNumber();
    if(badInput === true){
        console.log("Check phonenumber är i falskt format!");
        return badInput;
    }

    checkEmail();
    if(badInput === true){
        console.log("Check email är i falskt format!");
        return badInput;
    }

    checkCardNumber();
    if(badInput === true){
        console.log("Check cardnumber är i falskt format!");
        return badInput;
    }

    checkDate();
    if(badInput === true){
        console.log("Check date är i falskt format!");
        return badInput;
    }

    checkCVV();
    if(badInput === true){
        console.log("Check CVV är i falskt format!");
        return badInput;
    }
    return badInput;
}

async function getProductsFetch(){
    let path = "https://localhost:7128/Cart/ViewCart";
    let response = await fetch(path, {
        method: "GET",
        mode: "cors",
        headers:{
          "Content-Type":"application/json",
          "Authorization": localStorage.getItem("GUID")
        }
    });
    console.log(response);
    cartProducts = response.json();
    return cartProducts;
}

async function verify() {
    let path = "https://localhost:7128/User/VerifyRole";
    let response = await fetch(path, {
        headers: {
            "Authorization": localStorage.getItem("GUID"),
        },
    });
    role = await response.text();
    console.log(role);

    if(response.status === 403){
        location.href="LogIn.html";
    } else{
        console.log("anropar productsfetch i verify");
        productsFetch(role);
    }  
    return role;
}

async function getUserIdFetch(){
    let path = "https://localhost:7128/User/VerifyUserId";
    let response = await fetch(path, {
      headers:{
        "Authorization": localStorage.getItem("GUID")
      }
    });
    userId = await response.text();
    console.log(userId);
    return Number(userId);
}

async function createOrder(){
    await getUserIdFetch();
    console.log(allPrices);
    calculateTotalPrice(allPrices);

    let phonenumber = phonenumberInput.value;
    
    let zipcode = zipCodeInput.value;

    let country = countryInput.value;

    let city = cityInput.value;

    let adress = addressInput.value;

    let recipientName = recipientNameInput.value;

    console.log("JSON " + userId);
    console.log("JSON " + phonenumber);
    console.log("JSON " + zipcode);
    console.log("JSON " + country);
    console.log("JSON " + city);
    console.log("JSON " + adress);
    console.log("JSON " + recipientName);
    console.log("JSON " + totalPrice);

    let JSON = ({
        "userId": userId,
        "orderPrice":totalPrice,
        "phonenumber": phonenumber,
        "zipcode":zipcode,
        "country":country,
        "city":city,
        "adress":adress,
        "recipientName":recipientName
    });    
    console.log(JSON);
    postOrder(JSON);
    location.reload();
    //window.location.href="Cart.html";
}

async function postOrder(json){
    let path = "https://localhost:7128/Order/CreateOrder";
    let response = await fetch(path, {
        method: "POST",
        mode: "cors",
        headers:{
            "Content-Type":"application/json",
            "Authorization": localStorage.getItem("GUID")
        },
        body: JSON.stringify(json)
    });
}

function checkRecipientName(){
    let recipientNameValue = recipientNameInput.value.trim();
    let recipientNameRegex = /^[a-zåäöA-ZÅÄÖ]{1,30}\s[a-zåäöA-ZÅÄÖ]{1,50}$/;

    if(recipientNameRegex.test(recipientNameValue)){
        console.log("Namnet är i korrekt format!");
        recipientNameInput.style.backgroundColor = "#90EE90";
        errorRecipientName.innerHTML = " ";
        badInput = false;
        
    }else {
        console.log("Namnet är i felaktigt format!");
        recipientNameInput.style.backgroundColor = "#FFCCCB";
        errorRecipientName.innerHTML = "Namnet är i inkorrekt format!";
        badInput = true;
        return badInput;
    }
}

function checkCountry(){
    let countryValue = countryInput.value.trim();
    let countryRegex = /^[a-zåäöA-ZÅÄÖ]{1,25}(\s)?[a-zåäöA-ZÅÄÖ]{1,25}$/

    if (countryRegex.test(countryValue)) {
        console.log("Landet är i korrekt format!");
        countryInput.style.backgroundColor = "#90EE90";
        errorCountry.innerHTML = " ";
        badInput = false;

    }else {
        console.log("Landet är i inkorrekt format!");
        countryInput.style.backgroundColor = "#FFCCCB";
        errorCountry.innerHTML = "Landet är i inkorrekt format!";
        badInput = true;
        return badInput
    }
}

function checkZip(){
    let zipCodeValue = zipCodeInput.value.trim();
    let zipCodeRegex = /^\d{5}$|^\d{3}\s\d{2}$/;

    if (zipCodeRegex.test(zipCodeValue)) {
        console.log("Postnummret är giltigt!");
        zipCodeInput.style.backgroundColor = "#90EE90";
        errorZip.innerHTML = " ";
        badInput = false;

    }else {
        console.log("Postnummret är i inkorrekt format!");
        zipCodeInput.style.backgroundColor = "#FFCCCB";
        errorZip.innerHTML = "Postnummret är ogiltigt!";
        badInput = true;
        return badInput
    }
}

function checkCity(){
    let cityValue = cityInput.value.trim();
    let cityRegex = /^[a-zA-Z\s-åäöÅÄÖ]+$/

    if (cityRegex.test(cityValue)){
        console.log("Orten stämmer!");
        cityInput.style.backgroundColor = "#90EE90"
        errorCity.innerHTML = " ";
        badInput = false;

    }else {
        console.log("Orten är ogiltlig!");
        cityInput.style.backgroundColor = "#FFCCCB"
        errorCity.innerHTML = "Orten är i inkorrekt format!";
        badInput = true;
        return badInput
    }
}

function checkAddress(){
    let addressValue = addressInput.value.trim();
    let addressRegex = /^[a-zA-Z0-9\såäöÅÄÖ]+$/;

    if (addressRegex.test(addressValue)){
        console.log("Adressen stämmer!");
        addressInput.style.backgroundColor = "#90EE90"
        errorAddress.innerHTML = " ";
        badInput = false;

    }else {
        console.log("Adressen är ogiltlig!");
        addressInput.style.backgroundColor = "#FFCCCB"
        errorAddress.innerHTML = "Adressen är i inkorrekt format!";
        badInput = true;
        return badInput
    }
}

function checkPhoneNumber() {
    let phonenumberValue = phonenumberInput.value.trim();
    let phonenumberRegex = /^(?:(?:\+|00)46\s*|0)?\s*([1-9][0-9]\s*-*\s*[0-9]{2}\s*-*\s*[0-9]{2}\s*-*\s*[0-9]{2,3})$/;

    if (phonenumberRegex.test(phonenumberValue)) {
        console.log("Telefonnumret stämmer!");
        phonenumberInput.style.backgroundColor = "#90EE90";
        errorPhoneNumber.innerHTML = " ";
        badInput = false;

    } else {
        console.log("Telefonnumret är ogiltig!");
        phonenumberInput.style.backgroundColor = "#FFCCCB";
        errorPhoneNumber.innerHTML = "Telefonnumret är ogiltig!";
        badInput = true;
        return badInput
    }
}

function checkEmail(){
    let emailValue = emailInput.value.trim();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(emailValue)){
        console.log("Epostadressen är i korrekt format");
        emailInput.style.backgroundColor = "#90EE90";
        errorEmail.innerHTML = " ";
        badInput = false;

    } else{
        emailInput.style.backgroundColor = "#FFCCCB";
        errorEmail.innerHTML = "Epostadressen är i inkorrekt format!";
        badInput = true;
        return badInput
    }
}

function checkCardNumber(){
    let cardnumberValue = cardnumberInput.value.trim();
    let cardnumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])?[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    if(cardnumberRegex.test(cardnumberValue)){
        console.log("Kortnummret stämmer");
        cardnumberInput.style.backgroundColor = "#90EE90";
        errorCardNumber.innerHTML = " ";
        badInput = false;

    } else{
        cardnumberInput.style.backgroundColor = "#FFCCCB";
        errorCardNumber.innerHTML = "Kortnumret stämmer inte!";
        badInput = true;
        return badInput
    }
}

function checkDate(){
    let dateValue = dateInput.value.trim();
    let dateRegex = /^(0[1-9]|1[0-2])\/(1[9-9]|2[0-9])$/;

    if(dateRegex.test(dateValue)){
        console.log("Månaden är i korrekt format");
        dateInput.style.backgroundColor = "#90EE90";
        errorDate.innerHTML = " ";
        badInput = false;

    } else{
        dateInput.style.backgroundColor = "#FFCCCB";
        errorDate.innerHTML = "Månaden är i felaktigt format!";
        badInput = true;
        return badInput
    }
}

function checkCVV(){
    let cvvValue = cvvInput.value.trim();
    let cvvRegex = /^[0-9]{3}$/;

    if(cvvRegex.test(cvvValue)){
        console.log("CVV-koden är i korrekt format");
        cvvInput.style.backgroundColor = "#90EE90";
        errorCVV.innerHTML = " ";
        badInput = false;

    } else{
        cvvInput.style.backgroundColor = "#FFCCCB";
        errorCVV.innerHTML = "CVV-koden är felaktig!";
        badInput = true;
        return badInput
    }
}