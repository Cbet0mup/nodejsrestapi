
const myForm = document.getElementById('myForm');
// const input = document.getElementById('username');
const output = document.getElementById('response');

const getUserUrl = "https://reqres.in/api/users/2"

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

    let obj = response.data;
    //console.log(obj)
    for (const key in obj) {
        console.log(key + " : " + obj[key])
    }

    output.innerHTML = `
        <img src="${obj.avatar}" alt="">
        <p class="text">${obj.first_name + " " + obj.last_name}</p>
        <p class="text">${obj.email}</p>
    `;
}


    