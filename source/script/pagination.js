function pagination(totalPages, currentPage, hasPrevPage, hasNextPage) {

    console.log('totalPages: ' + totalPages);
    console.log('current page: ' + currentPage);
    console.log('hasPrevPage: ' + hasPrevPage);
    console.log('hasNextPage: ' + hasNextPage);

    const ul = document.getElementById('ulPag');
    const child = ul.lastElementChild;

    for (let index = 1; index <= totalPages; index++) {

       let text = document.createTextNode(index);
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.classList.add('page-item');
        a.classList.add('page-link');
        a.appendChild(text);
        
        li.appendChild(a);
        child.insertAdjacentElement('beforeBegin', li);
        
    }
    
}