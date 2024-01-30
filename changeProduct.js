function init() {
    changeProduct()
}
window.onload = init;

function changeProduct() {
    var productId = document.getElementById("productId").value;
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var onSale = document.getElementById("onSale").value;
    var inStock = document.getElementById("inStock").value;
    var salesPercentage = document.getElementById("salesPercentage").value;
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;
    var changeProductImage = document.getElementById("changeProductImage").value;

    var data = {
        id: productId,
        name: productName,
        price: productPrice,
        stock: inStock,
        salesPercentage: salesPercentage, 
        category: category,
        description: description,
        image: changeProductImage
    };
    console.log(productId);
    console.log(productName);
    console.log(productPrice);
    console.log(onSale);
    console.log(inStock);
    console.log(salesPercentage);
    console.log(category);
    console.log(description);
    console.log(changeProductImage);

    fetch('https://localhost:7128/Product/ChangeProduct', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {

        alert(data); 
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
}