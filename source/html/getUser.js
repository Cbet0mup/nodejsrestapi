import resBlockInit from './resBlockInit.js';
import getTable from './getTable.js';
import redactorOneClickTr from './redactorOneClickTr.js';
import pagination from './pagination.js';

export default function getUser(data){
    const totalPages = data.totalPages,
        page = data.page;

    resBlockInit();
    getTable();
    let tbody = document.getElementById('tbody');
    //console.log(data)
    data.docs.forEach(element => {
         const tr = document.createElement('tr');
         tr.id = element._id;
         tr.setAttribute('data-name', `${element.name}`);
         tr.setAttribute('data-post', `${element.post}`);
         tr.setAttribute('data-email', `${element.email}`);

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

