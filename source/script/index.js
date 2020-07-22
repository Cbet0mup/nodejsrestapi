const getAllDataUser = document.getElementById('getAllData');
const writeUser = document.getElementById('writeUser');
const getUserByNameOne = document.getElementById('getUserByName');
const output = document.getElementById('response');
//const ulTable = document.getElementById('ul');

const getUserUrl = "http://localhost:3000/posts/"

//********************************************************** */
 getAllDataUser.addEventListener("submit", (e) => {
        e.preventDefault();
        getAllData(getUserUrl)
            .then(data => getUser(data))
            .catch((err)=>{console.log(err)});
     });

/******************************************************************** */

writeUser.addEventListener("submit", (e) => {
    e.preventDefault();
    output.innerHTML = '';
    let name = document.getElementById('username');
    let post = document.getElementById('post');
    let email = document.getElementById('email');
    console.log("Name: " + name.value);
    console.log("Post: " + post.value);
    console.log("Email: " + email.value);
    let user = {
        name: `${name.value}`,
        post: `${post.value}`,
        email: `${email.value}`
    };

    writeNewUser(getUserUrl, user)
        .then(data => {console.log(data)});

        name.value = "";
        post.value = "";
        email.value = "";
});


getUserByNameOne.addEventListener("submit", (e) => {
    e.preventDefault();
    output.innerHTML = '';
    let inputUserName = document.getElementById('userOneName');
    //console.log(inputUserName.value);
    inputUserName.value = "";
    getDataByName(getUserUrl, inputUserName.value)
        .then(data => {console.log(data)});


});