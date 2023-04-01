const form =  document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=> {
    e.preventDefault(); //preventing form from submitting
}

sendBtn.onclick = ()=>{
    // let's Start Ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "Php/Insert-Chat.php", true);
    xhr.onload = ()=> {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200){
                inputField.value = ""; //once message into database then leave blank the input field
                scrolltoBottom();
            }
        }
    }
    // we have to send the form data through ajax to php
    let formData = new FormData(form); //creating new formData Object
    xhr.send(formData); //sending the form data to php
}

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(()=>{
    // let's Start Ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "Php/Get-Chat.php", true);
    xhr.onload = ()=> {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){ // if active class not contains in chatbox the scroll to bottom
                    scrolltoBottom();
                }
            }
        }
    }
    // we have to send the form data through ajax to php
    let formData = new FormData(form); //creating new formData Object
    xhr.send(formData); //sending the form data to php
}, 500); //this function will run frequently after 500ms

function scrolltoBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}