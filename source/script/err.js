function errInResponse(){
    resBlockInit();
    let paragraph = document.createElement('p');
    paragraph.innerText = 'В базе данных не нашлось данного объекта, \nпроверьте правильность ввода запроса.'
    output.append(paragraph);
}