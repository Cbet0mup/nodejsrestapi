
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
    //console.log(obj)
    obj.forEach(element => {
       console.log(element); 
       output.innerHTML = `
        <p class="text">${element.name}</p>
        <p class="text">${element.post}</p>
        <p class="text">${element.email}</p>
    `;
    });

    // output.innerHTML = `
    //     <p class="text">${obj.name}</p>
    //     <p class="text">${obj.post}</p>
    //     <p class="text">${obj.email}</p>
    // `;
}


    