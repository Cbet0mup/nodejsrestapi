function redactorOneClickTr(elemId){
    const elem = document.getElementById(elemId);
    let id = elem.getAttribute('id');
    let name = elem.getAttribute('data-name');
    let post = elem.getAttribute('data-post');
    let email = elem.getAttribute('data-email');
    
    showBlockUpdate()
    let nameVal = document.getElementById('usernameUp');
    let postVal = document.getElementById('postUp');
    let emailVal = document.getElementById('emailUp');
                            // формируем форму с данными объекта
    nameVal.setAttribute('data-id', id);
    nameVal.value = name;
    postVal.value = post;
    emailVal.value = email;
    
   // console.log(id)
}

