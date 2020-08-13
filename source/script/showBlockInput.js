const disableButtonWriter = document.getElementById('disableButton');
const disableButtonUpdater = document.getElementById('disableButtonUp');
const request = document.getElementById('request');
const update = document.getElementById('update');

    disableButtonWriter.onclick = () => {
        request.style.display = 'none';  //красная кнопка
};

    disableButtonUpdater.onclick = () => {
    update.style.display = 'none';  //красная кнопка
};

function showBlockInput() {
    request.style.display = 'block';
    
}

function showBlockUpdate() {
    update.style.display = 'block';
}
