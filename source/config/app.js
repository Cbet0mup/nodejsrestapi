export default class Сonfig {
    constructor() {
        this._MONGOURI = 'https://mongodbtestcase.herokuapp.com/posts';
        this.pageLimit = 10;                     // дефолтное колличество выводимых страниц
    }
    
    get mongourl(){
        return this._MONGOURI;
    }
    getpageLimit(num){
        return `?limit=${num}`;   //колличество строк
    }

    getpageNum (num) {
        return `&page=${num}`;   // с какой страницы начать вывод
    }

    get pagelimits(){
        return this.pageLimit;
    }
}

// const MONGOURI = 'http://localhost:3000/posts';

// const pageLimit = '?limit=10'; //10 строк

// function getPageNum (num) {
//     return `&page=${num}`;
// }


// https://mongodbtestcase.herokuapp.com/posts

//http://localhost:3000/posts