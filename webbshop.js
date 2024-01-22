let productsArray;

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

function init() {
  getProducts();
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
        
    let price;
         
    if (productInfo.onSale === 1) {
      const originalPrice = parseFloat(productInfo.price);
      const salesPercentage = parseFloat(productInfo.salesPercentage);
      const salePrice = (originalPrice * (100 - salesPercentage)) / 100;
      button.textContent = "Köp " + salePrice.toFixed(2) + " SEK (Rabatt: " + productInfo.salesPercentage + "%, Originalpris " + originalPrice + " SEK )";

      price = salesPrice;

      } else {
        button.textContent = "Köp " + productInfo.price + " SEK";
        price = parseFloat(productInfo.price);
    }


    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(rating)
    article.appendChild(p);
    article.appendChild(button);

    productContainer.appendChild(article);
  });
}


