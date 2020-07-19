
const myForm = document.getElementById('myForm');
// const input = document.getElementById('username');
const output = document.getElementById('response');

const getUserUrl = "http://localhost:3000/posts"

 myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        getResource(getUserUrl)
            .then(data => getSingleUser(data))
            .catch((err)=>{console.log(err)});
     });


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
       //console.log(element); 
        let blockName = document.createElement('p');
        let blockPost = document.createElement('p');
        let blockEmail = document.createElement('p');

        blockName.innerHTML = `${element.name}`;
        blockPost.innerHTML = `${element.post}`;
        blockEmail.innerHTML = `${element.email}`;

        output.append(blockName);
        output.append(blockPost);
        output.append(blockEmail);

    });

}


    