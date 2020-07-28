function getUser(data){
    
    resBlockInit();
    getTable();
    let tbody = document.getElementById('tbody');
    
    data.forEach(element => {
        const tr = document.createElement('tr');
        let th1 = document.createElement('td');
        let th2 = document.createElement('td');
        let th3 = document.createElement('td');

        th1.innerHTML = `${element.name}`;
        th2.innerHTML = `${element.post}`;
        th3.innerHTML = `${element.email}`;

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);


        tbody.appendChild(tr);




        // let ul = document.createElement('ul'); 
        // ul.id = 'ul';
        // let blockName = document.createElement('li');
        // let blockPost = document.createElement('li');
        // let blockEmail = document.createElement('li');
        
        // blockName.innerHTML = 'Name: ' + `${element.name}`;
        // blockPost.innerHTML = 'Post: ' + `${element.post}`;
        // blockEmail.innerHTML = 'Email: ' + `${element.email}`;

        // ul.append(blockName);
        // ul.append(blockPost);
        // ul.append(blockEmail);
        // output.append(ul);
        
    });

}

