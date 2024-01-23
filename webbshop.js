let productsArray;
let productId;
let clickedButton;
let article;

function init() {
  getProducts();
  addEventListener("click", clickButton);
}

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

function generateProducts() {
  const productContainer = document.getElementById("productContainer");
  console.log(productsArray);
  productsArray.forEach(productInfo => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const rating = document.createElement("p");
    const p = document.createElement("p");
    const button = document.createElement("button");

    img.src = productInfo.image; //If no image error 404 in console
    h3.textContent = productInfo.name;
    rating.textContent = productInfo.rating + "⭐";
    p.textContent = productInfo.description;
                 
    if (productInfo.onSale === 1) {
      const originalPrice = parseFloat(productInfo.price);
      const salesPercentage = parseFloat(productInfo.salesPercentage);
      const salePrice = (originalPrice * (100 - salesPercentage)) / 100;
      button.textContent = "Köp " + salePrice.toFixed(2) + " SEK (Rabatt: " + productInfo.salesPercentage + "%, Originalpris " + originalPrice + " SEK )";

      } else {
        button.textContent = "Köp " + productInfo.price + " SEK";
    }

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(rating)
    article.appendChild(p);
    article.appendChild(button);

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

function getUserId(){
  fetch('http://localhost:7128');
}