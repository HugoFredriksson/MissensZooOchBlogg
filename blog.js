const blogPostsArray = [
    {
        id: "1",
        userID: "2",
        title: "Titel 1",
        image: "background.jpg",
        time: "1:23:45",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut harum, temporibus nostrum odio aperiam ex nobis repellendus ea, nemo ut eius quos eum et qui assumenda, ullam facilis corporis."
    },
    {
        id: "2",
        userID: "2",
        title: "Titel 2",
        image: "image2.png",
        time: "2:34:56",
        text: "Another blog post with some content."
    },
    {
        id: "3",
        userID: "3",
        title: "Titel 3",
        image: "image3.png",
        time: "3:45:11",
        text: "Yet another blog post to demonstrate the layout."
    }, 
    {
        id: "4",
        userID: "1",
        title: "Exciting Adventure",
        image: "adventure.jpg",
        time: "4:56:52",
        text: "Embark on a thrilling adventure and explore the unknown. Discover hidden treasures and face challenges that will test your courage."
    },
    {
        id: "5",
        userID: "3",
        title: "Travel Diary",
        image: "travel-diary.png",
        time: "5:67:12",
        text: "Documenting my journey around the world. From bustling cityscapes to serene landscapes, each destination has its unique charm."
    },
    {
        id: "6",
        userID: "1",
        title: "Tech Innovations",
        image: "tech-innovations.jpg",
        time: "6:78:53",
        text: "Exploring the latest technological innovations that are shaping the future. Dive into the world of AI, robotics, and more."
    },
    {
        id: "7",
        userID: "2",
        title: "Culinary Delights",
        image: "culinary-delights.png",
        time: "7:89:01",
        text: "A gastronomic journey through diverse cuisines. From mouth-watering recipes to foodie adventures, savor the flavors of the world."
    },
    {
        id: "8",
        userID: "3",
        title: "Fitness Motivation",
        image: "fitness-motivation.jpg",
        time: "8:90:12",
        text: "Stay motivated on your fitness journey. Tips, workout routines, and inspiring stories to help you achieve your health and wellness goals."
    }
];

window.onload = function () {
    generateBlogPosts(blogPostsArray);
};

function generateBlogPosts(blogPostsArray) {
    const blogContainer = document.getElementById("blogpost");

    blogPostsArray.forEach(blogPost => {

        const span = document.createElement("span");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const pTime = document.createElement("p");
        const pText = document.createElement("p");
        
        h3.textContent = blogPost.title;
        img.src = blogPost.image;
        pTime.textContent = blogPost.time;
        pText.textContent = blogPost.text;

        span.appendChild(h3);
        span.appendChild(img);
        span.appendChild(pTime);
        span.appendChild(pText);

        blogContainer.appendChild(span);
    });
}