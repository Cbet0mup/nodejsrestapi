const express = require('express');
const Post = require('../models/post')
const router = express.Router();

// Получаем все записи
router.get('/', async(req, res) => {
    try{
        const post = await Post.find();
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

// отправляем запись в БД согласно заданной модели
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err){res.json({message: err})};
});
// router.get('/specific', (req, res) => {
//     res.send("SPECIFIC POST");
// });




module.exports = router;