var express = require('express');
var router = express.Router();
var movieDBService=require('../services/movieDBService');

router.get('/',function(req,res,next){
    var callback=function(result){
        res.send(result);
    }
    movieDBService.getMovies(callback);
});

router.get('/:id',function(req,res,next){
    res.send(movieList);
});

module.exports=router;