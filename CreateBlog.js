let form;
let imageDataUrl;
let userId;

function init(){
    form = document.querySelector("form");
    form.addEventListener("submit", event=>{

        console.log(userId + " init");
        postBlog(userId);
        event.preventDefault();
    })

    let imageInput = form.elements.image;
    imageInput.addEventListener("change", handleImageChange);

    let reader = new FileReader();
    reader.addEventListener("load", handleImageLoad);
}
window.onload = init();


async function postBlog(){
    await getUserIdFetch();
    console.log("postBLOG !!!" + userId);
    let title = form.elements.title.value;
    console.log("Detta är bloggtiteln: " + title);
    console.log(userId + " postblog");
    let content = form.elements.content.value;
    console.log("Detta är blogginnehållet: " + content);
    
    let category = form.elements.category.value;
    console.log("Detta är kategorin: " + category);

    const image = form.elements.image.value;
    console.log("JSON" + userId);
    let JSON = ({
        "title": title,
        "userId": userId,
        "content": content,
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