
function updateUser(e) {
  e.preventDefault();
  //resBlockInit();
  let name = document.getElementById('usernameUp');
  let post = document.getElementById('postUp');
  let email = document.getElementById('emailUp');
  let id = name.getAttribute('data-id');


  let user = {      //объект нового юзверя
    name: `${name.value.trim()}`,
    post: `${post.value.trim()}`,
    email: `${email.value.trim()}`
  };
  let uri = MONGOURI + '/' + id.trim();  //гибрид адреса и параметра запроса
  //console.log(uri);

  if (validator(user.name, user.post, user.email)) {
    //чистим
    name.value = "";
    post.value = "";
    email.value = "";
    paginationRowInit.innerHTML = '';  // чтоб стрелки не дублировались
    
    updateData(uri, user)
      .then(res => {
        if (res.nModified == 1) {
          getMessage(true, 'Объект успешно обновлён.');
        } else {
          getMessage(false, 'Произошла непоправимая ошибка :(');
          return;
        }
      })
      .catch(err =>  console.log(err) );

  } else {getMessage(false, 'Ошибка. Заполните все поля правильно.'); showBlockUpdate();}
}

async function updateData(url, data) {

  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error(`Could notfetch ${url}, status: ${res.status}`);
  } else {
    return await res.json();
  }
}
