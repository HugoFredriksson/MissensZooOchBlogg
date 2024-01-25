let form;
let imageDataUrl;

function init(){
    checkLogin();
    form = document.querySelector("form");
    form.addEventListener("submit", event=>{
        postBlog();
        event.preventDefault();
    })

    let imageInput = form.elements.image;
    imageInput.addEventListener("change", handleImageChange);

    let reader = new FileReader();
    reader.addEventListener("load", handleImageLoad);
}
window.onload = init();


async function postBlog(){
    let title = form.elements.title.value;
    console.log("Detta är bloggtiteln: " + title);
    
    let blogContent = form.elements.blogContent.value;
    console.log("Detta är blogginnehållet: " + blogContent);
    
    let category = form.elements.category.value;
    console.log("Detta är kategorin: " + category);
    let userId;
    const image = form.elements.image.value;

    if(image){
        try{
            userId = await getUserIdFetch();
        } catch{
            console.log("Fel vid procossering av bild!");
        }
    } else{
        console.log("Ingen bild vald!");
    }


    let JSON = ({
        "title": title,
        "userId": userId,
        "content": blogContent,
        "image": imageDataUrl,
        "category": category
    });    
    
    postBlogContent(JSON);
}

function handleImageChange(event){
    let imageInput = event.target;
    let image = imageInput.files[0];

    if(image){
        let reader = new FileReader();
        reader.addEventListener("load", handleImageLoad);
        reader.readAsDataURL(image);
    }
}

function handleImageLoad(event){
    imageDataUrl = event.target.result;
    console.log("Bild laddad: ", imageDataUrl);
    //Fortsätta att hantera bildens data här
}

async function getUserIdFetch(){
    let path = "https://localhost:7128/User/VerifyUserId";
    let response = await fetch(path, {
      headers:{
        "Authorization": localStorage.getItem("GUID")
      }
    });
    let userId = await response.text();
    console.log("AnvändarID: " + userId);
    return userId;
}

function checkLogin(){
    if(localStorage.getItem("GUID") === ""){
        location.href = "LogIn.html";
    }
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