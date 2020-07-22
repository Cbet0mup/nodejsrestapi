const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');  // скрытая херня с секретными данными login/pass

app.use(bodyParser.json());
// Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

app.use('/', express.static('source'));  // чтобы не ебаться с шаблонизаторами

const PORT = process.env.PORT || 3000;//process.env.PORT_CONNECT;

//DB connect 

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, 
    ()=> { 
        console.log('CONNECT to DB!!!');
    });

//listen server
app.listen(PORT, ()=>{
    console.log(`Connect server, port: ${PORT}`);
});
