const mongoUri = 'http://localhost:3000/posts';

const pageLimit = '?limit=5';

function getPageNum (num) {
    return page = `&page=${num}`;
}


// https://mongodbtestcase.herokuapp.com/posts/