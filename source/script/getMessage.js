const messageBlock = document.getElementById('messageBlock');
const message = document.getElementById('message');

function getMessage(data) {
    if(data){
        request.style.display = 'none';
    messageBlock.style.display = 'block';
    message.innerHTML = `Новый объект успешно внесён.`;
    setTimeout(() => {
        messageBlock.style.display = 'none';
        resBlockInit();
        dataByDB(1);

    }, 2000);
    } else {
        request.style.display = 'none';
        messageBlock.style.display = 'block';
        message.innerHTML = `Заполните все поля правильно`;
        setTimeout(() => {
            messageBlock.style.display = 'none';
            
            showBlockInput();
            dataByDB(1);
            

    }, 2000);
    }
    
}
