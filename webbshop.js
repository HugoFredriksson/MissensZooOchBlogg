let productsArray;
let button = document.getElementsByTagName("button");
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

async function getProductsFetch(){
  const path = "https://localhost:7128/Product/ViewAllProducts";

  let response = await fetch(path);
  console.log(response);

  let json = response.json();
  return json;
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
    const count = document.createElement("select")
    const productCount = document.createElement("option")
    const button = document.createElement("button");

    img.src = productInfo.image; //If no image error 404 in console
    h3.textContent = productInfo.name;
    rating.textContent = productInfo.rating + "⭐";
    p.textContent = productInfo.description;
    stock.textContent = productInfo.inStock + " st i lager";
         
    if (productInfo.onSale === 1) {
      const originalPrice = parseFloat(productInfo.price);
      const salesPercentage = parseFloat(productInfo.salesPercentage);
      const salePrice = (originalPrice * (100 - salesPercentage)) / 100;
      button.textContent = "Köp " + salePrice.toFixed(2) + " SEK (Rabatt: " + productInfo.salesPercentage + "%, Originalpris " + originalPrice + " SEK )";

      } else {
        button.textContent = "Köp " + productInfo.price + " SEK";
      }
      for (let i = 1; i <= 100; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        count.appendChild(option);
      }

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(rating);
    article.appendChild(stock);
    article.appendChild(p);
    article.appendChild(count);
    article.appendChild(productCount);
    article.appendChild(button);
    button.addEventListener("click", clickButton);

    productContainer.appendChild(article);
  });
}

function clickButton(event) {
  clickedButton = event.target;
  article = clickedButton.closest("article");

  if (article && clickedButton.tagName === "BUTTON") {
      let index = Array.from(article.parentElement.children).indexOf(article);
      productId = productsArray[index].id;
      let storedProducts = JSON.parse(sessionStorage.getItem("products")) || [];
      storedProducts.push(productId);
      sessionStorage.setItem("products", JSON.stringify(storedProducts));
      console.log("Valda produktens id: ", productId);
  }

  getUserId();

}


async function verify(){
  let path = "https://localhost:7128/User/VerifyRole";
  let response = await fetch(path, {
    headers:{
      "Authorization": localStorage.getItem("GUID")
    }
});
let role = await response.text();
console.log(role);
}
