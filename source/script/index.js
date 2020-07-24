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
        getData(getUserUrl)
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
        name: `${name.value.trim()}`,
        post: `${post.value.trim()}`,
        email: `${email.value.trim()}`
    };

    writeNewUser(getUserUrl, user)
        .then(data => {
            output.innerHTML = '';
            let paragraph = document.createElement('p');
            paragraph.innerText = `Внесён новый объект \n name: ${data.name} \n id: ${data._id}`;
            output.append(paragraph);
        });
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
    

    let uri = getUserUrl + inputUserName.value.trim();  //гибрид адреса и параметра запроса

    getData(uri)
        .then(data => {

            if (data == null || typeof data.name =='undefined') {
               errInResponse();
               return;
            } else{
            //console.log(data);
            getUser(new Array(data));
            }
        });


});