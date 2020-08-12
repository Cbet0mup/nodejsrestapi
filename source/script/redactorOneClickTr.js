function redactorOneClickTr(elemId){
    const elem = document.getElementById(elemId);
    let id = elem.getAttribute('id');
    let name = elem.getAttribute('data-name');
    let post = elem.getAttribute('data-post');
    let email = elem.getAttribute('data-email');
    
    console.log(id)
}