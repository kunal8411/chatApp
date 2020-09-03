const socket= io();

//take input from user using prompt 

let name;
let textarea= document.querySelector('#textarea');
let messageArea= document.querySelector('.message__area')

do{
   name= prompt('Please enter your name: ')
}while(!name)


//in text area when we press enter key then only oour sendMessage funvtion will gets called
//e.key ==='Enter'-->we are checking whether user enter a enter button or not 
textarea.addEventListener('keyup', (e)=>{
    if(e.key ==='Enter'){
        sendMessage(e.target.value)
    }
})


function sendMessage(message){
    let msg={
        user:name,
        message:message.trim()
    }

    appendMessage(msg, 'outgoing');
    textarea.value='';
    scrollTOBottom()
    socket.emit('message', msg)
}

function appendMessage(msg, type){
    let mainDiv= document.createElement('div');
    //which class is this outgoing/incooming 
    let className= type;


    //add class to our newly created div
    mainDiv.classList.add(className, 'message');

    let markUp= `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
     
    `
    mainDiv.innerHTML=markUp;

    messageArea.appendChild(mainDiv);


}

socket.on('message',(msg)=>{
    appendMessage(msg, 'incoming');
    scrollTOBottom()
})



//automatic scrolling 
function scrollTOBottom(){
    messageArea.scrollTop= messageArea.scrollHeight
}