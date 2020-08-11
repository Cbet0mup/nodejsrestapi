const mongoUri = 'http://localhost:3000/posts';

const pageLimit = '?limit=5'; //5 строк

function getPageNum (num) {
    return page = `&page=${num}`;
}


// https://mongodbtestcase.herokuapp.com/posts/