var express = require('express');
var router = express.Router();
var Departemen = require('../models/DepartemenModel');


router.get('/', function(req, res, next){  
    Departemen.find(function(err, departemen){
        if(err) return next(err);
        res.json(departemen);
    });
});

router.post('/tambah', function(req, res, next){  
    Departemen.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next){  
    Departemen.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next){  
    Departemen.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;