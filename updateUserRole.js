function init() {
    updateUserRole();
}
window.onload = init;

function updateUserRole() {
    var userId = document.getElementById("userIdRole").value;
    var newRole = document.getElementById("newRole").value;

    var user = {
        id: userId,
        role: newRole
    };

    console.log(userId);
    console.log(newRole);
    
    
    fetch('https://localhost:7128/User/UpdateUserRole', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem("GUID")
        },
        body: JSON.stringify(user),
    })
}