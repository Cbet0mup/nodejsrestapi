function getUser(data){
    const totalPages = data.totalPages,
        page = data.page,
        hasPrevPage = data.hasPrevPage,
        hasNextPage = data.hasNextPage;

    resBlockInit();
    getTable();
    let tbody = document.getElementById('tbody');

    data.docs.forEach(element => {
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
        
    });

    pagination(totalPages, page, hasPrevPage, hasNextPage);

    //******************************************** */
    
}

