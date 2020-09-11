const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');  // скрытая херня с секретными данными login/pass

//passport depenencies constants
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressHandlebars = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
//require('./config/passport');
//********************************** */

app.use(morgan('dev'));

//представления
app.engine('handlebars', expressHandlebars({defaultLayout: 'layout'}));
app.set('views', './views');//path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
//console.log(path.join(__dirname, 'views'));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser);
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    cookie: {maxAge: 60000},
    secret: 'ninjasecret',
    saveUninitialized: false,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use((req, res, next) => {
    res.locals.success_messages = req.flash('success');
    res.locals.error_messages = req.flash('error');
    next();
});

// routes

app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.render('notFound');
  });

// Import Routes
//const postRoute = require('./routes/posts');

//app.use('/posts', postRoute);

//app.use('/', express.static('source'));  // чтобы не ебаться с шаблонизаторами

const PORT = 5000;//process.env.PORT || 80;

//DB connect 

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> app.listen(PORT, ()=>{
            console.log(`Connect server and DB, port: ${PORT}...`);
        }))
        .catch(err => console.log(`Error connecting to mongo : ${process.env.DB_CONNECTION}`, err));

//listen server

