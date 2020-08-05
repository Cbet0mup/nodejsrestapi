const mongoUri = 'http://localhost:3000/posts';

const pageLimit = '?limit=5';

function getPageNum (num) {
    let page = `&page=${num}`;
    return page;
}


// https://mongodbtestcase.herokuapp.com/posts/