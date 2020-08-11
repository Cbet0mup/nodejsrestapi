//выведем форму добавления на экран
const message = document.getElementById('message');

function addInfoGetTable(e) {
        e.preventDefault();
        //console.log('click');
        request.style.display = 'block';
}

function getMessage() {
    request.style.display = 'none';
    message.style.display = 'block';
    setTimeout(() => {
    message.style.display = 'none';
    dataByDB();

    }, 2000)
}