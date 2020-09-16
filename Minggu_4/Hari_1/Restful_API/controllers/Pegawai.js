var express = require('express');
var router = express.Router();
var Pegawai = require('../models/PegawaiModel');


router.get('/', function(req, res, next){  
    Pegawai.find(function(err, pegawai){
        if(err) return next(err);
        res.json(pegawai);
    });
});

router.post('/tambah', function(req, res, next){  
    Pegawai.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next){  
    Pegawai.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next){  
    Pegawai.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;