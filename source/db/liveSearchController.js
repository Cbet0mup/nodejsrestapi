import Config from '../config/app.js';
import getUserLiveSearch from '../html/getUserLiveSearch.js';
import getDataByDB from './getDataByDb.js';
import dataByDB from '../db/dataByDB.js';


const conf = new Config();


export default function liveSearchUser() {
    let input = document.getElementById('searchData');
    input.oninput = function () {
        if(this.value != '' && !(this.value.match(/\s+/i))){
            setTimeout(() => {
                searchByName(this.value.trim());
            }, 300);
            
            //console.log(this.value);
        } else dataByDB();
    };
}

function searchByName (names){

    let uri = conf.mongourl + '/' + names;  //гибрид адреса и параметра запроса

    getDataByDB(uri)
        .then(data => getUserLiveSearch(data))
        .catch((err)=>console.log(err));

}


