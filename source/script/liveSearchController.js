window.onload = () => {
    let input = document.getElementById('searchData');
    input.oninput = function () {
        if(this.value != '' && !(this.value.match(/\s+/i))){
            setTimeout(() => {
                searchByName(this.value.trim());
            }, 250)
            
            //console.log(this.value);
        } else dataByDB(1);
    };
};

function searchByName (names){

    let uri = MONGOURI + '/' + names;  //гибрид адреса и параметра запроса

    // let user = {      //объект нового юзверя
    //     name: `${names}`
    // };

    getDataByDB(uri)// + pageLimit + getPageNum(1)
        .then(data => getUser2(data))
        .catch((err)=>{console.log(err)});

}

function getUser2(data){
    
    resBlockInit();
    getTable();
    let tbody = document.getElementById('tbody');
    //console.log(data)
    data.forEach(element => {
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

    
}

