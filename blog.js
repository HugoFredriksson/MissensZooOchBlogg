/*
const blogPostsArray = [
    {
        id: "1",
        userID: "2",
        title: "Titel 1",
        image: "background.jpg",
        time: "1:23:45",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut harum, temporibus nostrum odio aperiam ex nobis repellendus ea, nemo ut eius quos eum et qui assumenda, ullam facilis corporis."
    },
];*/

let blogPostsArray;

function init() {
    getBlogs();
    verify();
  }
  
  window.onload = init;
   
  async function getBlogs(){
    blogPostsArray = await getBlogsFetch();
    console.log(blogPostsArray);
    generateBlogPosts();
  }
  
  async function getBlogsFetch(){
    const path = "https://localhost:7128/Blog/ViewAllBlogs";
  
    let response = await fetch(path);
    console.log(response);
  
    let json = response.json();
    return json;
  }
  

function generateBlogPosts() {
    const blogContainer = document.getElementById("blogpost");

    blogPostsArray.forEach(blogPost => {

        const span = document.createElement("span");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const pTime = document.createElement("p");
        const pText = document.createElement("p");
        const pName = document.createElement("p");
        
        h3.textContent = blogPost.title;
        img.src = "images/" +blogPost.image;
        pTime.textContent = blogPost.timestamp;
        pText.textContent = blogPost.content;
        pName.textContent = blogPost.username;

        span.appendChild(h3);
        span.appendChild(img);
        span.appendChild(pTime);
        span.appendChild(pText);
        span.appendChild(pName);

        blogContainer.appendChild(span);
    });
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

