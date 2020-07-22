function getUser(response){

    let obj = response;
    output.innerHTML = '';
    //console.log(obj)
    obj.forEach(element => {
        let ul = document.createElement('ul'); 
        ul.id = 'ul';
        let blockName = document.createElement('li');
        let blockPost = document.createElement('li');
        let blockEmail = document.createElement('li');
        
        blockName.innerHTML = 'Name: ' + `${element.name}`;
        blockPost.innerHTML = 'Post: ' + `${element.post}`;
        blockEmail.innerHTML = 'Email: ' + `${element.email}`;

        ul.append(blockName);
        ul.append(blockPost);
        ul.append(blockEmail);
        output.append(ul);
        
    });

}