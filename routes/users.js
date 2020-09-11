const express = require('express');
const router = express.Router();
const Joi = require('joi');
const passport = require('passport');

const User = require('../models/user');

//проверка введённых данных через joi

const userShema = Joi.object().keys({
    email: Joi.string().email().required(),
    username: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required()
});

router.route('/register')
    .get((req, res) => {res.render('register');})
    .post(async (req, res, next) => {
        try{
            //проверяем
            const result = Joi.validate(req.body, userShema);
            if(result.error) {
                req.flash('error', 'Data entered is not valid. Please try again.');
                res.redirect('/users/register');
                return;
            }
            //ищем в БД
            const user = await User.findOne({'email': result.value.email}); 
            if(user) {
                req.flash('error', 'Email is already in use.');
                res.redirect('/user/register');
                return;
            }

            //хешим пасс
            const hash = await User.hashPassword(result.value.password);

            delete result.value.confirmPassword; //это нам не надо вБД
            result.value.passport = hash;  //а пасс заменим на хеш
            // сохраняем в БД
            const newUser = await new User(result.value);
            await newUser.save();

            req.flash('success', 'Registration successfully, go ahead and login.');
            res.redirect('/users/login');
        } catch(err){next(err);}
    });

    module.exports = router;