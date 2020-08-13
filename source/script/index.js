const getTableToWriteNewData = document.getElementById('addNewData');
const writeUser = document.getElementById('writeUser');
const getUserByOneName = document.getElementById('getUserByName');
const deleteUserByName = document.getElementById('deleteByName');
const updateUserById = document.getElementById('updateByiD');
const output = document.getElementById('response');
const paginationRowInit = document.getElementById('ulPag');

function dataByDB(num){
    getDataByDB(MONGOURI + pageLimit + getPageNum(num))
            .then(data => getUser(data))
            .catch((err)=>{console.log(err)});
}
//**************************  вывести базу при загрузке страницы,дефолт: лимит 5 стр 1 ******************************** */

document.addEventListener("DOMContentLoaded", function(){

    getTableToWriteNewData.addEventListener('click', e => addInfoGetTable(e));
    dataByDB(1);
});

/*************************        запись новго  ******************************************* */
writeUser.addEventListener("submit", (e) => { writeNewUserToDb(e)});

//**************************запрос по имени    ******************************/
// getUserByOneName.addEventListener("submit", (e) => {
//     e.preventDefault();
//     resBlockInit();

//     let userName = document.getElementById('userOneName');
//     let uri = getUserUrl + userName.value.trim();  //гибрид адреса и параметра запроса

//     let user = {      //объект нового юзверя
//         name: `${userName.value.trim()}`
//     };

//     getDataByDB(uri)
//         .then(data => {
//             //console.log(data.constructor === Array);
//             if (data == null || data.length == 0) {
//                errInResponse();
//                return;
//             } else{
//             //console.log(data);
//             getUser(data);
//            }
//         });


// });

/**************************************    delete   ********************* */
// deleteUserByName.addEventListener('submit', (e) => {
//     e.preventDefault();
//     resBlockInit();

//     let userName = document.getElementById('deleteUser');
//     let uri = getUserUrl + userName.value.trim();  //гибрид адреса и параметра запроса

//     delUser(uri)
//         .then(data => {
//             if(data.deletedCount == 1) {
//             let paragraph = document.createElement('p');
//             paragraph.innerText = 'Объект удалён из БД';
//             output.append(paragraph);
//             } else 
//                 {
//                 errInResponse();
//                 return;
//             }
//     });
//     userName.value = '';

// });
/**************************************   update     **************** */
updateUserById.addEventListener('submit', (e) => {updateUser(e);});