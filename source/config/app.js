const MONGOURI = 'http://localhost:3000/posts';

const pageLimit = '?limit=10'; //10 строк

function getPageNum (num) {
    return page = `&page=${num}`;
}


// https://mongodbtestcase.herokuapp.com/posts/