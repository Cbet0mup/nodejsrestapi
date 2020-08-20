import Config from '../config/app.js';
import getDataByDB from '../db/getDataByDb.js';
import getUser from '../html/getUser.js';


const configur = new Config();

export default function dataByDB(pageLimit, pageNum){
    getDataByDB(configur.mongourl + configur.getpageLimit(pageLimit || 10) + configur.getpageNum(pageNum || 1))
            .then(data => getUser(data))
            .catch((err)=>console.log(err));
}