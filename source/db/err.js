import resBlockInit from '../html/resBlockInit.js';

export default function errInResponse(){
    resBlockInit();
    
    console.log('В базе данных не нашлось данного объекта, \nпроверьте правильность ввода запроса.');
    
}