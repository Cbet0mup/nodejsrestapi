const disableButton = document.getElementById('disableButton');
const request = document.getElementById('request');


function showBlockInput() {
    request.style.display = 'block';
    disableButton.onclick = () => {
        request.style.display = 'none';
    };
}
