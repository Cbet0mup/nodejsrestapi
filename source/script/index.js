const getAllDataUser = document.getElementById('getAllData');
const writeUser = document.getElementById('writeUser');
const getUserByOneName = document.getElementById('getUserByName');
const deleteUserByName = document.getElementById('deleteByName');
const updateUserByName = document.getElementById('updateByName');
const output = document.getElementById('response');


/***************************   прикол****************** */
let elem = document.getElementById('elem');

document.addEventListener('mousemove', function(event) {
	elem.innerHTML = event.clientX + ' : ' + event.clientY;
});

/***************************   прикол****************** */


const getUserUrl = "http://localhost:3000/posts/";//window.location.host;
//const getUserUrl = "https://mongodbtestcase.herokuapp.com/posts/"; 

//**************************  вывести всю базу  ******************************** */

 getAllDataUser.addEventListener("submit", (e) => {
        e.preventDefault();
        getData(getUserUrl)
            .then(data => getUser(data))
            .catch((err)=>{console.log(err)});
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

    writeNewUser(getUserUrl, user)
        .then(data => {
            let paragraph = document.createElement('p');
            paragraph.innerText = `Внесён новый объект \n name: ${data.name} \n post: ${data.post} \n email: ${data.email}`;
            output.append(paragraph);
        });
        //чистим
        name.value = "";
        post.value = "";
        email.value = "";
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

    getData(uri)
        .then(data => {
            //console.log(data.constructor === Array);
            if (data == null || data.length < 1) {
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