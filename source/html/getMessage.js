import dataByDB from '../db/dataByDB.js';
import resBlockInit from './resBlockInit.js';
import {request} from './showBlockInput.js';
import {update} from './showBlockInput.js';




const messageBlock = document.getElementById('messageBlock');
const message = document.getElementById('message');

export default function getMessage(data, mess) {
    if(data){
        request.style.display = 'none';
        update.style.display = 'none';
    messageBlock.style.display = 'block';
    message.innerHTML = mess;
    setTimeout(() => {
        messageBlock.style.display = 'none';
        resBlockInit();
        dataByDB();

    }, 3000);
    } else {
        request.style.display = 'none';
        update.style.display = 'none';
        messageBlock.style.display = 'block';
        message.innerHTML = mess;
        setTimeout(() => {
            messageBlock.style.display = 'none';
    }, 3000);
    }
    
}
