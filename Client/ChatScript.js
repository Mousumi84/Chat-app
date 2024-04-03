const socket = io();

let nameinput = document.getElementById("username");
let submit = document.getElementById("submit-btn");
let intro = document.getElementById("chatintro");
let containerroom = document.getElementById("chatroom-container");

let username = " ";

submit.addEventListener("click",(e) => {
    e.preventDefault();
    username=nameinput.value;
    
    if(username) {
        containerroom.style.display="block";
        intro.style.display="none";
    }
    
})


// Connection between frontend - backend

let sendbtn = document.getElementById("send-btn");
let messagetype = document.getElementById("type-message");
let chat = document.getElementById("chat");


sendbtn.addEventListener("click", () => {
    //data packet
    let data = {
        id: socket.id,
        message: messagetype.value,
        username: username,
    }

    socket.emit("sending message event",data);
    renderMessage(data,"send");
})

/*
<div id="chat">
<div class="send"><span><div>Mou</div>Hey! How are you?</span></div>
<div class="receive"><span><div>Abir</div>I'm fine</span></div>
</div>      
*/

function renderMessage(data,typeofMessage) {
    let msgdiv = document.createElement("div");
    msgdiv.innerHTML = `<span><div>${data.username}</div>${data.message}</span>`;

    if(typeofMessage ==='send') {
       msgdiv.className = "send";
    }
    else {
        msgdiv.className = "receive";
    }

    chat.appendChild(msgdiv);
    messagetype.value=" ";
}

//io.emit("spreading message event",data);

socket.on("io spreading message",(data) => {
    if(socket.id !== data.id) {
        renderMessage(data,"receive");
        console.log("receive");
    }
})

