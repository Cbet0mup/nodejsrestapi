function errInResponse(){
    output.innerHTML = '';
    let paragraph = document.createElement('p');
    paragraph.innerText = 'В базе данных не нашлось данного объекта, проверьте правильность ввода запроса.'
    output.append(paragraph);
}