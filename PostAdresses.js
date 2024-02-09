let postAdressArray = [];
let role;
let article;
let pTagPostInfo;
let gridContainer;


function init(){
    gridContainer = document.getElementsByTagName("div")[1];
    
    verify();
    
}
window.onload = init();

function createPostAdresses(postAdressArray){
    console.log("createPostAdresses Array is:");
    console.log(postAdressArray);

    if(Array.isArray(postAdressArray) && postAdressArray.length === 0){
        article = document.createElement("article");
        gridContainer.appendChild(article); 
        pTagPostInfo = document.createElement("h3");
        pTagPostInfo.textContent = "Finns inga användare med postadress!";
        pTagPostInfo.style.color = "red";
        pTagPostInfo.style.border = "none";
        article.appendChild(pTagPostInfo);
    } else{
        for (const adress of postAdressArray){
            article = document.createElement("article");
    
            gridContainer.appendChild(article); 
    
            pTagPostInfo = document.createElement("h3");
    
            pTagPostInfo.textContent = "id: " + adress.id + " namn: " + adress.userName + " postadress: " + adress.postAdress;
    
            article.appendChild(pTagPostInfo);
    
        } 
    }
    gridContainer.removeChild(gridContainer.children[1]);
}


async function GetPostAdresses(){
    verify();
    if(role != 3){
        location.href = "profile.html"
    }

    console.log("role in ViewPostAdresses: " + role);

    postAdressArray = await GetPostAdressesFetch();  

    createPostAdresses(postAdressArray);
}

async function GetPostAdressesFetch(){
    let path = "https://localhost:7128/User/GetAllPostAdress";

    let response = await fetch(path, {
        headers: {
            "Authorization": localStorage.getItem("GUID"),
        },
    });

    return response.json();
}

async function verify() {
    let path = "https://localhost:7128/User/VerifyRole";
    let response = await fetch(path, {
        headers: {
            "Authorization": localStorage.getItem("GUID"),
        },
    });
    role = await response.text();
    console.log("role is " + role)
    return role;
}
