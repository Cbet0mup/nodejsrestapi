const getTableToWriteNewData = document.getElementById('addNewData');
const writeUser = document.getElementById('writeUser');
const getUserByOneName = document.getElementById('getUserByName');
const deleteUserByName = document.getElementById('deleteByName');
const updateUserByName = document.getElementById('updateByName');
const output = document.getElementById('response');
const request = document.getElementById('request');
const paginationRowInit = document.getElementById('ulPag');

function dataByDB(num){
    getDataByDB(mongoUri + pageLimit + getPageNum(num))
            .then(data => getUser(data))
            .catch((err)=>{console.log(err)});
}
//**************************  вывести базу при загрузке страницы,дефолт: лимит 5 стр 1 ******************************** */

document.addEventListener("DOMContentLoaded", function(){

    getTableToWriteNewData.addEventListener('click', e => addInfoGetTable(e));
    dataByDB(1);
});

/*************************        запись новго  ******************************************* */

writeUser.addEventListener("submit", (e) => {
    e.preventDefault();
    resBlockInit();

    let name = document.getElementById('username');
    let post = document.getElementById('post');
    let email = document.getElementById('email');
    
    let user = {      //объект нового юзверя
        name: `${name.value.trim()}`,
        post: `${post.value.trim()}`,
        email: `${email.value.trim()}`
    };

    writeNewUser(mongoUri, user)
        .then(data => {
            getMessage(data);
            
        });
        //чистим
        name.value = "";
        post.value = "";
        email.value = "";
        paginationRowInit.innerHTML = '';
        
});

//**************************запрос по имени    ******************************/
getUserByOneName.addEventListener("submit", (e) => {
    e.preventDefault();
    resBlockInit();

    let userName = document.getElementById('userOneName');
    let uri = getUserUrl + userName.value.trim();  //гибрид адреса и параметра запроса

    let user = {      //объект нового юзверя
        name: `${userName.value.trim()}`
    };

    getDataByDB(uri)
        .then(data => {
            //console.log(data.constructor === Array);
            if (data == null || data.length == 0) {
               errInResponse();
               return;
            } else{
            //console.log(data);
            getUser(data);
           }
        });


});

/**************************************    delete   ********************* */
deleteUserByName.addEventListener('submit', (e) => {
    e.preventDefault();
    resBlockInit();

    let userName = document.getElementById('deleteUser');
    let uri = getUserUrl + userName.value.trim();  //гибрид адреса и параметра запроса

    delUser(uri)
        .then(data => {
            if(data.deletedCount == 1) {
            let paragraph = document.createElement('p');
            paragraph.innerText = 'Объект удалён из БД';
            output.append(paragraph);
            } else 
                {
                errInResponse();
                return;
            }
    });
    userName.value = '';

});
/**************************************   update     **************** */
updateUserByName.addEventListener('submit', (e) => {
    e.preventDefault();
    resBlockInit();

    let userName = document.getElementById('oldname');
    let uri = getUserUrl + userName.value.trim();  //гибрид адреса и параметра запроса

    let name = document.getElementById('updatename');
    let post = document.getElementById('updatepost');
    let email = document.getElementById('updateemail');
    
    let user = {      //объект нового юзверя
        name: `${name.value.trim()}`,
        post: `${post.value.trim()}`,
        email: `${email.value.trim()}`
    };

    updateData(uri, user)
        .then(data => {
            if (data.nModified == 1) {
            let paragraph = document.createElement('p');
            paragraph.innerText = `Объект успешно обновлён.`;
            output.append(paragraph);
            } else 
                {
                errInResponse();
                return;
        }
});

userName.value = '';
name.value = '';
post.value = '';
email.value = '';

});