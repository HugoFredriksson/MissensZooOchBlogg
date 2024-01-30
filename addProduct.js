function init() {
    addProduct()
}
window.onload = init;

function addProduct() {
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var onSale = document.getElementById("onSale").value;
    var stockCount = document.getElementById("stockCount").value;
    var productOnSalePercentage = document.getElementById("productOnSalePercentage").value;
    var productCategory = document.getElementById("productCategory").value;
    var productDescription = document.getElementById("productDescription").value;
    var productImage = document.getElementById("productImage").value;

    var data = {
        name: name,
        price: price,
        stock: stockCount,
        salesPercentage: productOnSalePercentage, 
        category: productCategory,
        description: productDescription,
        image: productImage
    };
    console.log(name);
    console.log(price);
    console.log(onSale);
    console.log(stockCount);
    console.log(productOnSalePercentage);
    console.log(productCategory);
    console.log(productDescription);
    console.log(productImage);

    fetch('https://localhost:7128/Product/CreateProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}