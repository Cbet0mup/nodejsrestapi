const disableButtonWriter = document.getElementById('disableButton');
const disableButtonUpdater = document.getElementById('disableButtonUp');


    disableButtonWriter.onclick = () => {
        request.style.display = 'none';  //красная кнопка
        dataByDB(1);
};

    disableButtonUpdater.onclick = () => {
    update.style.display = 'none';  //красная кнопка
    dataByDB(1);
};

function showBlockInput() {
    request.style.display = 'block';
    
}

function showBlockUpdate() {
    update.style.display = 'block';
}
