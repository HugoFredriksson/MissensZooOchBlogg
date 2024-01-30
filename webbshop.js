let productsArray;
let button = document.getElementsByTagName("button");
let role;
let productCount;
let customNumberInput;

let userId;
let productId;
let quantity;
let price;

/*
const productsArray = [
    {
        id: 1,
        description: "Håll dina tår varma med dessa gulliga kattstrumpor av hög kvalitet. En perfekt present till kattälskaren!",
        name: "Kattstrumpor",
        category: "Övrigt",
        price: "99",
        inStock: 5,
        image: "image1.png",
        portionPerDay: "1",
        articleNumber: "1", 
        rating: "2",
        foodInfo: "Kcal: 140/100 gram",
        onSale: false,
        salePercentage: null
    }
  ];
*/

///////////////////////////////////////////////////////////////////////
function init() {
  getProducts();
  verify();
  getUserId();
}
////////////////////////////////////////////////////////////////////////
window.onload = init;

async function getProducts(){
  productsArray = await getProductsFetch();
  console.log(productsArray);
  generateProducts();
}


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

async function getProductsFetch(){
  const path = "https://localhost:7128/Product/ViewAllProducts";

  let response = await fetch(path);
  console.log(response);

  let json = response.json();
  return json;
}

async function postBlogContent(json){
  let path = "https://localhost:7128/Blog/CreateBlog";
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