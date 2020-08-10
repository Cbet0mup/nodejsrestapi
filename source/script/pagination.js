function pagination(totalPages, currentPage) {

    function pagEvent(param) // замыкание
    {   
        let number = param;
        if(number == "hasPrev"){
            if(currentPage > 1) number = currentPage - 1;
                else number = 1;
        }
            else if(number == "hasNext"){
                if(currentPage < 4) number = currentPage + 1;
                    else number = 4;
            }            

        document.getElementById('ulPag').innerHTML = "";
        getData(mongoUri + pageLimit + getPageNum(number))
        .then(data => getUser(data))
        .catch((err)=>{console.log(err)});

    };
/*******************   создадим блок нумерации   *********** */    
    const ul = document.getElementById('ulPag');

    const liPrev = document.createElement('li');
    const liNext = document.createElement('li');
    liPrev.classList.add('page-item');
    liNext.classList.add('page-item');
    if(currentPage < 2) liPrev.classList.add('disabled');
    if(currentPage == totalPages) liNext.classList.add('disabled');
    const aPrev = document.createElement('a');
    const aNext = document.createElement('a');
    aPrev.classList.add('page-link');
    aNext.classList.add('page-link');
    aPrev.setAttribute("id", "hasPrev");
    aNext.setAttribute("id", "hasNext");
    aPrev.textContent = "Previous";
    aNext.textContent = "Next";
    liPrev.appendChild(aPrev);
    liNext.appendChild(aNext);
    ul.appendChild(liPrev);
    ul.appendChild(liNext);
    /************  повешаем клики на стрелки  ***** * */
    aPrev.onclick = () => {
        pagEvent("hasPrev");   
       };
    aNext.onclick = () => {
        pagEvent("hasNext");   
       };   

const child = ul.lastElementChild; // ссыль на крайнего дитя

    for (let index = 1; index <= totalPages; index++) //  циферки согласно  колличеству страниц
    {
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.classList.add('page-item');
        a.classList.add('page-link');
        if(currentPage == index) li.classList.add('active');
        a.textContent = index;
        a.setAttribute("id", `${index}`);
        a.onclick = () =>   // клик
        {
         pagEvent(index);   
        }
         li.appendChild(a);
        child.insertAdjacentElement('beforeBegin', li);
        
    }

    
    
}

