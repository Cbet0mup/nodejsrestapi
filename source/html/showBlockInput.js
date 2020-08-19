const disableButtonWriter = document.getElementById('disableButton');
const disableButtonUpdater = document.getElementById('disableButtonUp');


    disableButtonWriter.onclick = () => {
        request.style.display = 'none';  //красная кнопка
        dataByDB();
};

    disableButtonUpdater.onclick = () => {
    update.style.display = 'none';  //красная кнопка
    dataByDB();
};

function showBlockInput() {
    request.style.display = 'block';
    update.style.display = 'none';
}

function showBlockUpdate() {
    request.style.display = 'none';
    update.style.display = 'block';
}
