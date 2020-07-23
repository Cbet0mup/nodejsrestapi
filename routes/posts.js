const express = require('express');
const Post = require('../models/post');
const { syncIndexes } = require('../models/post');
const router = express.Router();

// Получаем все записи
router.get('/', async(req, res) => {
    try{
        console.log("Получаем все записи");
        const post = await Post.find();
        

        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

// Получаем запись из БД по name
router.get('/:name', async(req, res) => {
    try{
        console.log('Получаем запись из БД по name ');
        
       const post = await Post.findOne({name: req.params.name});
        res.json(post);
        
    }catch(err){
        res.json({message: err});
    }
});

// отправляем запись в БД согласно заданной модели
router.post('/', async(req, res) => {
    console.log('отправляем запись в БД согласно заданной модели');
    const post = new Post({
        name: req.body.name,
        post: req.body.post,
        email: req.body.email
    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err){
    console.log('отправляем запись в БД согласно заданной модели');
        
        res.json({message: err})};
});

//REMOVE
router.delete('/:postID', async(req, res) => {
    try {
        console.log('REMOVE');
        const removedPost = await Post.deleteOne({_id: req.params.postID});
        console.log('Deleted: ' + res.body.postID);

        res.json(removedPost);

    } catch (error) {
        console.log('REMOVE');

        res.json({message: error});
    }
});

//UPDATE BD

router.patch('/:postID', async(req, res) => {
    try {
        console.log('UPDATE BD')
        const updatePost = await Post.updateOne(
            {_id: req.params.postID},
            {$set: {title: req.body.title}}
            );
            res.json(updatePost);
    } catch (error) {
        console.log('UPDATE BD')

        res.json({message: error});
    }
});




module.exports = router;