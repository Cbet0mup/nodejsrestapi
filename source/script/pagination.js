function pagination(totalPages, currentPage) {

    function pagEvent(param) // замыкание
    {                       // реализуем работу стрелочек в пагинации
        let numberPage = param;
        if(numberPage == "hasPrev"){
            if(currentPage > 1) numberPage = currentPage - 1;
                else numberPage = 1;
        }
            else if(numberPage == "hasNext"){
                if(currentPage < 4) numberPage = currentPage + 1;
                    else numberPage = 4;
            }            

        document.getElementById('ulPag').innerHTML = "";
        
        dataByDB(numberPage);

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

