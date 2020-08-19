import Config from '../config/app.js';
import getUserLiveSearch from '../html/getUserLiveSearch.js';

const conf = new Config();


window.onload = () => {
    let input = document.getElementById('searchData');
    input.oninput = function () {
        if(this.value != '' && !(this.value.match(/\s+/i))){
            setTimeout(() => {
                searchByName(this.value.trim());
            }, 300);
            
            //console.log(this.value);
        } else dataByDB(10,1);
    };
};

function searchByName (names){

    let uri = conf.mongouri() + '/' + names;  //гибрид адреса и параметра запроса

    getDataByDB(uri)
        .then(data => getUserLiveSearch(data))
        .catch((err)=>console.log(err));

}


