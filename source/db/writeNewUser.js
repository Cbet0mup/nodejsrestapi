
export default function writeNewUserToDb(e){
    e.preventDefault();
    //resBlockInit();

    let name = document.getElementById('username');
    let post = document.getElementById('post');
    let email = document.getElementById('email');

    let user = {      //объект нового юзверя
      name: `${name.value.trim()}`,
      post: `${post.value.trim()}`,
      email: `${email.value.trim()}`
  };

      //проверяем чё там навводили
       if(validator(user.name, user.post, user.email)){
          //чистим
          name.value = "";
          post.value = "";
          email.value = "";
          paginationRowInit.innerHTML = '';  // чтоб стрелки не дублировались

          writeNewUser(MONGOURI, user)
            .then(() => {getMessage(true, 'Новый объект успешно внесён.');});
    } else {getMessage(false, 'Ошибка. Заполните все поля правильно.'); showBlockInput();}
}

async function writeNewUser(url, data) {
    
  const res = await fetch(url, {
      method: 'POST',
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