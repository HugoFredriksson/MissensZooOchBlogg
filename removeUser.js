function init() {
    removeUser();
}
window.onload = init;

function removeUser() {
    var userId = document.getElementById("userId").value;
    var data = {
        id: userId,
    };

    fetch('https://localhost:7128/User/RemoveUser', {
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
            console.log(userId)
        }
        return response.json();
    })
}
