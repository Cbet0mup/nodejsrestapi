//выведем форму добавления на экран
const messageBlock = document.getElementById('messageBlock');
const message = document.getElementById('message');

function addInfoGetTable(e) {
        e.preventDefault();
        //console.log('click');
        request.style.display = 'block';
}

function getMessage(data) {
    request.style.display = 'none';
    messageBlock.style.display = 'block';
    message.innerHTML = `Новый объект успешно внесён.`
    setTimeout(() => {
    messageBlock.style.display = 'none';
    resBlockInit();
    dataByDB(1);

    }, 2000)
}