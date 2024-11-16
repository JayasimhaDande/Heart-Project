// JavaScript to change the message when the button is clicked
function changeMessage() {
    const messages = [
        "I Love You!", 
        "You Mean The World To Me!", 
        "You Are My Everything!", 
        "My Heart Beats For You!",
        "Forever and Always <3"
    ];
    
    const messageElement = document.getElementById('message');
    const currentMessage = messageElement.innerHTML;
    
    let newMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Make sure it's different from the current message
    while (newMessage === currentMessage) {
        newMessage = messages[Math.floor(Math.random() * messages.length)];
    }

    messageElement.innerHTML = newMessage;
}
