let form;


function init() {
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        logIn();
        event.preventDefault();
    })
    if(localStorage.getItem("GUID") === "")
    {
        //Logga in
        location.href= "index.html";

    }
};
window.onload = init;

async function logIn() {
    let email = form.elements.username.value;
    let password = form.elements.password.value;
    let path = "https://localhost:7128/User/Login";
    console.log(email, password);
    
    const response = await fetch(path ,{
        method:"GET",
        mode:"cors",
        headers:{
          Authorization: "Basic: " + btoa(email+":"+password)
        }
    })

    

   // let status = await postFetch();
   console.log(response);
    if(response.status === 200){
        let key = await response.text();
        console.log(response);
        localStorage.setItem('GUID', key);
        console.log(localStorage.getItem('GUID'));
        

    } else{
        console.log("FEL ),:");
    }
}


async function postFetch(){
    fetch
}