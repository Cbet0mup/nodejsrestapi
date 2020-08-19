import Config from '../config/app.js';
import getDataByDB from '../db/getDataByDb.js';
import getUser from '../html/getUser.js';


const conf = new Config();

export default function dataByDB(pageLimit, pageNum){
    getDataByDB(conf.mongouri() + conf.pageLimit(pageLimit || 10) + conf.pageNum(pageNum || 1))
            .then(data => getUser(data))
            .catch((err)=>console.log(err));
}