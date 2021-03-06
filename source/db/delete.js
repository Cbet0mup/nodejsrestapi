import Config from '../config/app.js';
import getMessage from '../html/getMessage.js';
import paginationRowInit from '../html/resBlockInit.js';

const conf = new Config();


export default function delUserByDb() {
    let name = document.getElementById('usernameUp');
    let post = document.getElementById('postUp');
    let email = document.getElementById('emailUp');
    let id = name.getAttribute('data-id');

    let uri = conf.mongourl + '/' + id.trim();
    if(id != ''){
        delUser(uri)
        .then(data => {
                 if(data.deletedCount == 1) getMessage(true, 'Объект удалён');
                    else getMessage(false, 'Ошибка, объект не выбран');
        })
        .catch((err) => { console.log(err) });
    
        name.value = "";
        post.value = "";
        email.value = "";
        paginationRowInit.innerHTML = '';
    }  
        else getMessage(false, 'Ошибка, объект не выбран')


}

async function delUser(data) {

    const res = await fetch(data, {
        method: 'DELETE'
      });

    if(!res.ok){
        throw new Error(`Could notfetch ${url}, status: ${res.status}`);
    } else {
        return await res.json(); 
    }
}