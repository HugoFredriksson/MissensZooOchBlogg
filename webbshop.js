let productsArray;
let button = document.getElementsByTagName("button");

let categoryButtonFeed = document.getElementById("feed");
let categoryButtonAnimal = document.getElementById("animal");
let categoryButtonMiscellaneous = document.getElementById("miscellaneous");
let categoryButtonDogs = document.getElementById("dog");
let categoryButtonCats = document.getElementById("cat");
let categoryButtonBirds = document.getElementById("bird");
let categoryButtonFish = document.getElementById("fish");
let categoryButtonTransport = document.getElementById("transport");
let categoryButtonBeautyProducts = document.getElementById("beautyProduct");
let categoryButtonBowls = document.getElementById("bowl");

let role;
let productCount;
let customNumberInput;

let userId;
let productId;
let quantity;
let price;
let category;

///////////////////////////////////////////////////////////////////////
function init() {

  getProducts();
  verify();
  getUserId();
  declareCategoryEventListeners();
}
////////////////////////////////////////////////////////////////////////
window.onload = init;



async function getUserId(){
  await getUserIdFetch();
}

async function getUserIdFetch(){
  let path = "https://localhost:7128/User/VerifyUserId";
  let response = await fetch(path, {
    headers:{
      "Authorization": localStorage.getItem("GUID")
    }
  });
  let userId = await response.text();
  console.log(userId);
}

function declareCategoryEventListeners(){
  categoryButtonFeed.addEventListener("click", event =>{
    console.log("Sorterar efter foder");
    category = "Foder";
    sortProductsByCategory(category);
  })

  categoryButtonAnimal.addEventListener("click", event => {
    console.log("Sorterar efter alla djur");
    sortProductsAllAnimals();
  })

  categoryButtonMiscellaneous.addEventListener("click", event =>{
    console.log("Sorterar efter övriga produkter");
    category = "Övrigt";
    sortProductsByCategory(category);
  })

  categoryButtonDogs.addEventListener("click", event =>{
    console.log("Sorterar efter hundar");
    category = "Hund";
    sortProductsByCategory(category);
  })

  categoryButtonCats.addEventListener("click", event =>{
    console.log("Sorterar efter katter");
    category = "Katt";
    sortProductsByCategory(category);
  })

  categoryButtonBirds.addEventListener("click", event =>{
    console.log("Sorterar efter fåglar");
    category = "Fågel";
    sortProductsByCategory(category);
  })

  categoryButtonFish.addEventListener("click", event =>{
    console.log("Sorterar efter fiskar");
    category = "Fisk";
    sortProductsByCategory(category);
  })

  categoryButtonTransport.addEventListener("click", event =>{
    console.log("Sorterar efter transportmedel");
    category = "Transportmedel";
    sortProductsByCategory(category);
  })

  categoryButtonBeautyProducts.addEventListener("click", event => {
    console.log("Sorterar efter skönhetsprodukter");
    category = "Skönhetsprodukt";
    sortProductsByCategory(category);
  })

  categoryButtonBowls.addEventListener("click", event => {
    console.log("Sorterar efter skålar");
    category = "Skål";
    sortProductsByCategory(category);
  })
}

function generateProducts() { 
  const productContainer = document.getElementById("productContainer");
  console.log(productsArray);
  productsArray.forEach(productInfo => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const rating = document.createElement("p");
    const stock = document.createElement("p");
    const p = document.createElement("p");
    productCount = document.createElement("option")

    const button = document.createElement("button");

    button.id = productInfo.id;

    //Button for incrementing count of products to buy
    const increment = document.createElement("button");
    increment.id = productInfo.id;
    increment.textContent = "+";

    //Button for decrementing count of products to buy
    const decrement = document.createElement("button");
    decrement.id = productInfo.id;
    decrement.textContent = "-";

    customNumberInput = document.createElement("input");
    customNumberInput.id = productInfo.id;
    customNumberInput.value = 1;
    customNumberInput.type = "number"

    img.src = productInfo.image; //If no image error 404 in console
    h3.textContent = productInfo.name;
    rating.textContent = productInfo.rating + "⭐";
    p.textContent = productInfo.description;
    stock.textContent = productInfo.inStock + " st i lager";
         
    //If the product is on sale calculates it in calculateSale function and prints out result in buybutton text, 
    //otherwise just prints out the original price
    if(productInfo.onSale === 1){
      calculateSale(productInfo);
      button.textContent = "Köp " + price.toFixed(2) + " SEK (Rabatt: " + productInfo.salesPercentage + "%, Originalpris " + productInfo.price + " SEK )";
    } else{
      button.textContent = "Köp " + productInfo.price + " SEK";
    }
    

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(rating);
    article.appendChild(stock);
    article.appendChild(p);
    article.appendChild(customNumberInput);
    article.appendChild(productCount);
    article.appendChild(button);

    button.addEventListener("click", event => {
      clickButton(productInfo);
    });

    article.appendChild(increment);
    article.appendChild(decrement);

    increment.addEventListener("click", event => {
      console.log(productInfo.id);
      incrementValue(productInfo);
    });

    
    decrement.addEventListener("click", event=> {
      console.log(productInfo.id);
      decrementValue(productInfo);
    })

   

    productContainer.appendChild(article);
  });
}

function incrementValue(productInfo){
  console.log("+");
  console.log(productInfo.id);
  var input = document.getElementById(productInfo.id);
  input.stepUp();
}

function decrementValue(productInfo){
  console.log("-");
  console.log(productInfo.id);
  var input = document.getElementById(productInfo.id);
  input.stepDown();
}

//Connected to add To cart function
function clickButton(productInfo) {
  getUserId();
  if(role === 0){
    console.log("Du måste vara inloggad!!!!");
  }else{
    addToCart(productInfo);
    const selectedCount = productCount;
    console.log("Selected Product Count: " + selectedCount);
    console.log("Your role: " + role);


  }
}

//Calculates the sale price
function calculateSale(productInfo){

  if (productInfo.onSale === 1) {
    const originalPrice = parseFloat(productInfo.price);
    const salesPercentage = parseFloat(productInfo.salesPercentage);
    const salePrice = (originalPrice * (100 - salesPercentage)) / 100;
    price = salePrice;

  } else {
    button.textContent = "Köp " + productInfo.price + " SEK";
    price = parseFloat(productInfo.price);
  }
  return price
}

async function addToCart(productInfo){
  await getUserIdFetch();
  console.log("userId addToCart: " + userId);

  productId = productInfo.id;
  console.log("productId addToCart: " + productId);

  calculateSale(productInfo);
  console.log("price addToCart: " + price)

  var input = document.getElementById(productInfo.id);
  quantity = input.value;
  console.log("quantity addToCart: " + quantity);

  let JSON = ({
    "userId": userId,
    "productId": productId,
    "quantity": quantity,
    "price": price
  });    
  addProductsToCart(JSON);
}

async function addProductsToCart(json){
  let path = "https://localhost:7128/Cart/AddProductToCart";
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

async function verify(){
  let path = "https://localhost:7128/User/VerifyRole";
  let response = await fetch(path, {
    headers:{
      "Authorization": localStorage.getItem("GUID")
    }
  });
  role = await response.text();
  console.log(role);
}

async function getProducts(){
  productsArray = await getProductsFetch();
  console.log(productsArray);
  generateProducts();
}

async function getProductsFetch(){
  const path = "https://localhost:7128/Product/ViewAllProducts";

  let response = await fetch(path);
  console.log(response);

  let json = response.json();
  return json;
}

async function sortProductsByCategory(category){
  productsArray = [];
  productsArray = await sortProductsByCategoryFetch(category);
  console.log(productsArray);
  deleteAllProducts();
  generateProducts();
}

async function sortProductsByCategoryFetch(category){
  const path = "https://localhost:7128/Product/SortProductsByCategory/" + category;

  let response = await fetch(path);
  console.log("response: " + response);
  productsArray = response.json();
  console.log(productsArray);
  return productsArray;

}

async function sortProductsAllAnimals(){
  productsArray = [];
  productsArray = await sortProductsAllAnimalsFetch();
  console.log(productsArray);
  deleteAllProducts();
  generateProducts();
}

async function sortProductsAllAnimalsFetch(){
  const path = "https://localhost:7128/Product/SortProductsCategoryAllAnimals";
  let response = await fetch(path);
  productsArray = response.json();
  console.log(productsArray);
  return productsArray;
}


function deleteAllProducts(){
  const articles = Array.from(document.getElementsByTagName('article'));
  console.log(articles);

  articles.forEach(article => {
    article.remove();
  });
}