function getUser(data){
    const totalPages = data.totalPages,
        page = data.page;

    resBlockInit();
    getTable();
    let tbody = document.getElementById('tbody');

    data.docs.forEach(element => {
         const tr = document.createElement('tr');
         tr.id = element._id;
         tr.setAttribute('data-name', `${element.name}`);
         tr.setAttribute('data-post', `${element.post}`);
         tr.setAttribute('data-email', `${element.email}`);
//console.log(element)
        tr.innerHTML = `
        <td>${element.name}</td>
        <td>${element.post}</td>
        <td>${element.email}</td>`;
        tr.addEventListener("click", () => {redactorOneClickTr(element._id);});
      
         tbody.appendChild(tr);        
    });

    pagination(totalPages, page);

    //******************************************** */
    
}

