const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

const PORT = process.env.PORT || 3000;


//Middleware
// app.use('/posts', () => {
//     console.log('This is a MIDDLEWARE!!!')
// })

// routes


//DB connect 

// mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
//     console.log('CONNECT to DB!!!');
    
// });

//listen server
app.listen(PORT, ()=>{
    console.log(`Connect server, port: ${PORT}`);
})
