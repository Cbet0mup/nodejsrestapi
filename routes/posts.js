const express = require('express');
const Post = require('../models/post');
const { syncIndexes } = require('../models/post');
const { json } = require('body-parser');
const router = express.Router();






// Получаем все записи
router.get('/', async(req, res) => {
    try{     
        //    let page = 0,
        const limit = req.query.limit || 5;
        const page = req.query.page || 1;

         const post = await Post.paginate({},{limit, page})
        
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

// Получаем запись из БД по name
router.get('/:name', async(req, res) => {
    try{
       const post = await Post.find({name: req.params.name});//findOne({name: req.params.name});
        res.json(post);
        
    }catch(err){
        res.json({message: err});
    }
});

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
    } catch(err){        
        res.json({message: err})};
});

//REMOVE
router.delete('/:name', async(req, res) => {
    try {
       
        const removedPost = await Post.deleteOne({name: req.params.name});
        res.json(removedPost);

    } catch (error) {
        console.log('REMOVE');

        res.json({message: error});
    }
});

//UPDATE BD

router.patch('/:id', async(req, res) => {
    try {
  //console.log(req.params.id);

        const updatePost = await Post.updateOne(
            {_id: req.params.id},
            {$set: {
                name: req.body.name,
                post: req.body.post,
                email: req.body.email

            }}  
            );
            res.json(updatePost);
    } catch (error) {
        console.log('UPDATE BD')

        res.json({message: error});
    }
});




module.exports = router;