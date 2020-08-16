
const getTableToWriteNewData = document.getElementById('addNewData');
const writeUser = document.getElementById('writeUser');
//const getUserByOneName = document.getElementById('getUserByName');
const deleteUser = document.getElementById('deleteButton');
const updateUserById = document.getElementById('updateByiD');
const request = document.getElementById('request');
const update = document.getElementById('update');

function dataByDB(num){
    getDataByDB(MONGOURI + pageLimit + getPageNum(num))
            .then(data => getUser(data))
            .catch((err)=>console.log(err));
}
//**************************  вывести базу при загрузке страницы,дефолт: лимит 5 стр 1 ******************************** */

document.addEventListener("DOMContentLoaded", function(){

    getTableToWriteNewData.addEventListener('click', e => addInfoGetTable(e));
    dataByDB(1);
});

/*************************        запись новго  ******************************************* */
writeUser.addEventListener("submit", (e) =>  writeNewUserToDb(e));


/**************************************    delete   ********************* */

deleteUser.addEventListener('click', (e) => {
    e.preventDefault();
    delUsr();
    dataByDB(1);
});

/**************************************   update     **************** */
updateUserById.addEventListener('submit', (e) => {updateUser(e); dataByDB(1);});