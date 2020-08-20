export default class Сonfig {
    constructor() {
        this._MONGOURI = 'http://localhost:3000/posts';
        this.pageLimit = 10;                     // дефолтное колличество выводимых страниц
    }
    
    get mongouri(){
        return this._MONGOURI;
    }
    pageLimit(num){
        return `?limit=${num}`;   //колличество строк
    }

    pageNum (num) {
        return `&page=${num}`;   // с какой страницы начать вывод
    }

    get pagelimit(){
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