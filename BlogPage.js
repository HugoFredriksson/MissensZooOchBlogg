let BlogId;
let blogPostsArray;
let path;
let commentsArray;
let commentPath;

function init() {
    getBlogId();
    getBlogs();
    getComments();
    
}
window.onload = init();

async function getBlogId() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let BlogId = Number(urlParams.get("BlogId"))
    path = "https://localhost:7128/Blog/" +BlogId;
    commentPath = "https://localhost:7128/Comment/GetCommentsFromBlogId/" +BlogId;
    console.log(BlogId)

    return BlogId;
}


async function getBlogs(BlogId){
    blogPostsArray = await getBlogFetch();
    console.log(blogPostsArray);

    generateBlogPost(blogPostsArray);
}

async function getBlogFetch(){  
    let response = await fetch(path);
    console.log(response);
  
    let json = response.json();
    return json;
}

async function generateBlogPost() {
    const blogContainer = document.getElementById("blogpost");

    for (const blogPost of blogPostsArray) {
        const span = document.createElement("span");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const pTime = document.createElement("p");
        const pText = document.createElement("p");
        const pName = document.createElement("p");

        h3.textContent = blogPost.title;
        img.src = "images/" + blogPost.image;
        pTime.textContent = blogPost.timestamp;
        pText.textContent = blogPost.content;
        pName.textContent = blogPost.username;
    
        span.appendChild(h3);
        span.appendChild(img);
        span.appendChild(pTime);
        span.appendChild(pText);
        span.appendChild(pName);

        blogContainer.appendChild(span);
    }
}

async function getComments() {
    commentsArray = await getCommentsFetch();
    console.log(commentsArray);
    generateComments();
}

async function getCommentsFetch() {
    let response = await fetch(commentPath);
    console.log(response);

    let json = await response.json(); // Await the result of the function
    return json;
}

async function generateComments() {
    const commentsContainer = document.getElementById("comments")

    for (const comment of commentsArray) {
        const span = document.createElement("span");
        const userName = document.createElement("p");
        const content = document.createElement("p");
        const timestamp = document.createElement("p");

        userName.textContent = comment.userName;
        content.textContent = comment.content;
        timestamp.textContent = comment.timestamp;

        span.appendChild(userName);
        span.appendChild(content);
        span.appendChild(timestamp);

        commentsContainer.appendChild(span);
    }
}

