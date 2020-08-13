
function updateUser(e) {
  e.preventDefault();
  //resBlockInit();
    //getDataBy
   
    let id = document.getElementById('_id');
    let name = document.getElementById('usernameUp');
    let post = document.getElementById('postUp');
    let email = document.getElementById('emailUp');
  
  let user = {      //объект нового юзверя
      name: `${name.value.trim()}`,
      post: `${post.value.trim()}`,
      email: `${email.value.trim()}`
  };
  let uri = MONGOURI + '/' + id.value.trim();  //гибрид адреса и параметра запроса
  console.log(uri);

  updateData(uri, user)
      .then(res => {
  console.log(res);
        
          if (res.nModified == 1) {
          
          console.log(`Объект успешно обновлён.`);
          
          } else 
              {
              errInResponse();
              return;
      }
});

}

async function updateData(url, data){
    
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(data)
      });

    if(!res.ok){
        throw new Error(`Could notfetch ${url}, status: ${res.status}`);
    } else {
        return await res.json(); 
    }
}
