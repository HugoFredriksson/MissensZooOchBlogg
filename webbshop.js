const productsArray = [
    {
        productId: 1,
        productDescription: "Beskrivning för produkt 1",
        productName: "Produkt 1",
        productCategory: "Kategori 1",
        productPrice: "20:-",
        productStock: 5,
        productImage: "bildproduct1.png"
    },
    {
        productId: 2,
        productDescription: "Beskrivning för produkt 2",
        productName: "Produkt 2",
        productCategory: "Kategori 2",
        productPrice: "40:-",
        productStock: 10,
        productImage: "bildproduct2.png"
    },
    
];
window.onload = init;

function init() {
    generateProducts(productsArray);
}

function generateProducts(productsArray) {
    const productContainer = document.getElementById("productContainer");

    productsArray.forEach(productInfo => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const a = document.createElement("a");

        h3.textContent = productInfo.productName;
        p.textContent = productInfo.productCategory;
        a.textContent = "Köp - " + productInfo.productPrice;

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(a);

        productContainer.appendChild(article);
    });
}

