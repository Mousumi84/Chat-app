let nameinput=document.getElementById("username");
let submit=document.getElementById("submit-btn");
let intro=document.getElementById("chatintro");
let containerroom=document.getElementById("chatroom-container");

let namevalue=" ";

submit.addEventListener("click",(e) => {
    e.preventDefault();
    namevalue=username.value;
    
    if(namevalue) {
        intro.style.display="none";
        containerroom.style.display="block";
    }
    
})