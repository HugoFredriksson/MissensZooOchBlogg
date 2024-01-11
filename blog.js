const blogPostsArray = [
    {
        title: "Titel 1",
        image: "image1.png",
        time: "1:23:45",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut harum, temporibus nostrum odio aperiam ex nobis repellendus ea, nemo ut eius quos eum et qui assumenda, ullam facilis corporis."
    },
    {
        title: "Titel 2",
        image: "image2.png",
        time: "2:34:56",
        text: "Another blog post with some content."
    },
    {
        title: "Titel 3",
        image: "image3.png",
        time: "3:45:67",
        text: "Yet another blog post to demonstrate the layout."
    }
];

window.onload = function () {
    generateBlogPosts(blogPostsArray);
};

function generateBlogPosts(blogPostsArray) {
    const blogContainer = document.getElementById("blogpost");

    blogPostsArray.forEach(blogPost => {
        const span = document.createElement("span");
        span.classList.add("blog");

        const h3 = document.createElement("h3");
        h3.textContent = blogPost.title;

        const img = document.createElement("img");
        img.src = blogPost.image;

        const pTime = document.createElement("p");
        pTime.textContent = blogPost.time;

        const pText = document.createElement("p");
        pText.textContent = blogPost.text;

        span.appendChild(h3);
        span.appendChild(img);
        span.appendChild(pTime);
        span.appendChild(pText);

        blogContainer.appendChild(span);
    });
}