const express = require('express');
const Post = require('../models/post');
const { syncIndexes } = require('../models/post');
const router = express.Router();

// Получаем все записи
router.get('/', async(req, res) => {
    try{
        const post = await Post.find();
        // res.set('Access-Control-Allow-Credentials', 'true');
        // res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

// Получаем запись из БД по name
router.get('/:name', async(req, res) => {
    try{
       const post = await Post.findOne(req.params.name);
        res.json(post);
        console.log(req.params.name);
    }catch(err){
        res.json({message: err});
    }
})

// отправляем запись в БД согласно заданной модели
router.post('/', async(req, res) => {
    const post = new Post({
        name: req.body.name,
        post: req.body.post,
        email: req.body.email
    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err){res.json({message: err})};
});

//REMOVE
router.delete('/:postID', async(req, res) => {
    try {
        const removedPost = await Post.deleteOne({_id: req.params.postID});
        console.log('Deleted: ' + res.body.postID);

        res.json(removedPost);

    } catch (error) {
        res.json({message: error});
    }
});

//UPDATE BD

router.patch('/:postID', async(req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postID},
            {$set: {title: req.body.title}}
            );
            res.json(updatePost);
    } catch (error) {
        res.json({message: error});
    }
});




module.exports = router;