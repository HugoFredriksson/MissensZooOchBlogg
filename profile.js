let role;
let main;
let orderContainer;
let viewCartButton;
let orderArray = [];
let userId;
let orderIdSecond;
let article;

function init() {
    getUserId();
    verify();
    main = document.getElementsByTagName("div")[1];
    orderContainer = document.getElementsByTagName("div")[2];
    viewCartButton = document.getElementsByTagName("button")[1];
}
window.onload = init;

async function getUserId() {
    await getUserIdFetch();
}

async function getUserIdFetch() {
    let path = "https://localhost:7128/User/VerifyUserId";
    let response = await fetch(path, {
        headers: {
            "Authorization": localStorage.getItem("GUID"),
        },
    });
    userId = await response.text();
    console.log("userId " + userId);
    return userId;
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
    createContent(role);
    return role;
}

function createContent(role){
    if (role === "0") {
        window.location.href = "LogIn.html";
    }
    if (role === "3") {

        var aTag = document.createElement('a');
        var goToPost = document.createElement('a');
        var ChangePostAdress = document.createElement('a');
        var viewCartButton = document.createElement('button');

        viewCartButton.textContent = "Se dina beställningar";

        aTag.href = 'Admin.html'; 
        aTag.textContent = 'Admin'; 

        goToPost.href = 'PostAdresses.html';
        goToPost.textContent = 'Se användare och postadresser';



        main.appendChild(aTag);
        main.appendChild(goToPost);
        orderContainer = document.getElementsByTagName("div")[2];
        orderContainer.appendChild(viewCartButton);

        viewCartButton.addEventListener("click", event => {
            while(orderContainer.firstChild){
                orderContainer.removeChild(orderContainer.firstChild);
            }
            getOrders();
        })
    }

    if(role === "2"){
        var viewCartButton = document.createElement('button');
        var ChangePostAdress = document.createElement('a');

        viewCartButton.textContent = "Se dina beställningar";
        
        viewCartButton.addEventListener("click", event => {
            while(orderContainer.firstChild){
                orderContainer.removeChild(orderContainer.firstChild);
            }
            getOrders();
        })
        
        orderContainer.appendChild(viewCartButton);
        ChangePostAdress.href = 'UpdatePostAdress.html';
        ChangePostAdress.text = "Uppdatera Postadress";
        main.appendChild(ChangePostAdress);
    }


}

async function getOrders(){
    orderArray = await getOrdersFetch();
    console.log(orderArray);
    
    createOrderList(orderArray);
    

}

async function getOrdersFetch(){
    console.log("getOrdersFetch " + userId)
    let path = "https://localhost:7128/Order/ViewOrders/" + userId;
    console.log(path);
    let response = await fetch(path);

    console.log(response);
    return response.json();
}

function createOrderList(orderArray){

    let first = true;
    let previousOrderId;
    
    for (const orders of orderArray) {
        
        if(first){
            article = document.createElement("article");

        }
        if(first === false && previousOrderId != orders.orderId){
            article = document.createElement("article");
            orderContainer.appendChild(article); 
            
        }

        const h3 = document.createElement("h3");
        h3.textContent = orders.name + ", pris: " + orders.price + " kr/st, antal: " + orders.quantity + " order: " + orders.orderId;
        article.appendChild(h3);
        
        if(first){
            orderContainer.appendChild(article); 
        }

        previousOrderId = orders.orderId;
        first = false;
    }
}