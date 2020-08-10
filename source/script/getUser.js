function getUser(data){
    const totalPages = data.totalPages,
        page = data.page;

    resBlockInit();
    getTable();
    let tbody = document.getElementById('tbody');

    data.docs.forEach(element => {
        const tr = document.createElement('tr');

        tr.innerHTML = `<tr>
        <td>${element.name}</td>
        <td>${element.post}</td>
        <td>${element.email}</td>
        </tr>`;
      
         tbody.appendChild(tr);        
    });

    pagination(totalPages, page);

    //******************************************** */
    
}

