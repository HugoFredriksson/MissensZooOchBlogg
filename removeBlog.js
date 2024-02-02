function init() {
    removeBlog()
}
window.onload = init;

function removeBlog() {
    var blogId = document.getElementById("blogId").value;
    var data = {
        blogId: blogId
    };

    fetch('https://localhost:7128/Blog/RemoveBlog', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem("GUID")
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            alert(response.status);
        }
        return response.json();
    })
}

