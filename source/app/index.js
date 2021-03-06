import dataByDB from '../db/dataByDB.js';
import addInfoGetTable from '../html/addInfoGetTable.js';
import writeNewUserToDb from '../db/writeNewUser.js';
import delUserByDb from '../db/delete.js';
import updateUser from '../db/update.js';
import liveSearchUser from '../db/liveSearchController.js';

const getTableToWriteNewData = document.getElementById('addNewData');
const writeUser = document.getElementById('writeUser');
const deleteUser = document.getElementById('deleteButton');
const updateUserById = document.getElementById('updateByiD');


//**************************  вывести базу при загрузке страницы,дефолт: лимит 5 стр 1 ******************************** */

document.addEventListener("DOMContentLoaded", function(){

    getTableToWriteNewData.addEventListener('click', e => addInfoGetTable(e));
    liveSearchUser();
    dataByDB();
});

/*************************        запись новго  ******************************************* */
writeUser.addEventListener("submit", (e) =>  writeNewUserToDb(e));


/**************************************    delete   ********************* */

deleteUser.addEventListener('click', (e) => {
    e.preventDefault();
    delUserByDb();
    dataByDB();
});

/**************************************   update     **************** */
updateUserById.addEventListener('submit', (e) => {updateUser(e); dataByDB();});