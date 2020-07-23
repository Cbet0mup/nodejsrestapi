const getAllDataUser = document.getElementById('getAllData');
const writeUser = document.getElementById('writeUser');
const getUserByOneName = document.getElementById('getUserByName');
const output = document.getElementById('response');
//const ulTable = document.getElementById('ul');

const getUserUrl = "http://localhost:3000/posts/"

//********************************************************** */
//вывести всю базу (хе-хе)
 getAllDataUser.addEventListener("submit", (e) => {
        e.preventDefault();
        getAllData(getUserUrl)
            .then(data => getUser(data))
            .catch((err)=>{console.log(err)});
     });

/******************************************************************** */
//запись новго
writeUser.addEventListener("submit", (e) => {
    e.preventDefault();
    output.innerHTML = '';
    let name = document.getElementById('username');
    let post = document.getElementById('post');
    let email = document.getElementById('email');
    
    let user = {      //объект нового юзверя
        name: `${name.value}`,
        post: `${post.value}`,
        email: `${email.value}`
    };

    writeNewUser(getUserUrl, user)
        .then(data => {console.log(data)});
        //чистим
        name.value = "";
        post.value = "";
        email.value = "";
});

//запрос по имени
getUserByOneName.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log('запрос по имени');
    output.innerHTML = '';
    let inputUserName = document.getElementById('userOneName');
    
    let uri = getUserUrl + inputUserName.value;  //гибрид адреса и параметра запроса

    getDataByName(uri)
        .then(data => {
            if (data == null || data) {
               errInResponse();
               return;
            } else{
            console.log(data);
            getUser(new Array(data));
            }
        });


});