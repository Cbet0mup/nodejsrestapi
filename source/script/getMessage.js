const messageBlock = document.getElementById('messageBlock');
const message = document.getElementById('message');

function getMessage(data, mess) {
    if(data){
        request.style.display = 'none';
        update.style.display = 'none';
    messageBlock.style.display = 'block';
    message.innerHTML = mess;
    setTimeout(() => {
        messageBlock.style.display = 'none';
        resBlockInit();
        dataByDB(1);

    }, 2000);
    } else {
        request.style.display = 'none';
        update.style.display = 'none';
        messageBlock.style.display = 'block';
        message.innerHTML = mess;
        setTimeout(() => {
            messageBlock.style.display = 'none';
    }, 2000);
    }
    
}
