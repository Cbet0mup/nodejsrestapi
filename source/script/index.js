const myForm = document.getElementById('myForm');
const writeUser = document.getElementById('searchByName');
// const input = document.getElementById('username');
const output = document.getElementById('response');
//const ulTable = document.getElementById('ul');

const getUserUrl = "http://localhost:3000/posts/"
//********************************************************** */
 myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        getResource(getUserUrl)
            .then(data => getSingleUser(data))
            .catch((err)=>{console.log(err)});
     });
// Get DATA
async function getResource(url){

    const res = await fetch(`${url}`);

    if(!res.ok){
        throw new Error(`Could notfetch ${url}, status: ${res.status}`);
    } else {
        return await res.json(); 
    }
}

function getSingleUser(response){

    let obj = response;
    output.innerHTML = '';
    //console.log(obj)
    obj.forEach(element => {
        let ul = document.createElement('ul'); 
        ul.id = 'ul';
        let blockName = document.createElement('li');
        let blockPost = document.createElement('li');
        let blockEmail = document.createElement('li');
        
        blockName.innerHTML = 'Name: ' + `${element.name}`;
        blockPost.innerHTML = 'Post: ' + `${element.post}`;
        blockEmail.innerHTML = 'Email: ' + `${element.email}`;

        ul.append(blockName);
        ul.append(blockPost);
        ul.append(blockEmail);
        output.append(ul);
        //output.innerHTML = '<br>';


    });

}
/******************************************************************** */

writeUser.addEventListener("submit", (e) => {
    e.preventDefault();
    output.innerHTML = '';
    let name = document.getElementById('username');
    let post = document.getElementById('post');
    let email = document.getElementById('email');
    console.log("Name" + name.value);
    console.log("Post" + post.value);
    console.log("Email" + email.value);
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

async function writeNewUser(url, data) {
    let user = data;

    const res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });

    if(!res.ok){
        throw new Error(`Could notfetch ${url}, status: ${res.status}`);
    } else {
        return await res.json(); 
    }
}

    