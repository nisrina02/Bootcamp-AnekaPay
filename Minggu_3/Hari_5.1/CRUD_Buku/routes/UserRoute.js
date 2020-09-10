(function() {
    'use strict';
  
    var express = require('express'),
      User = require('../models/User'),
      csrf = require('csurf'),
      router = express.Router(),
      csrfProtection = csrf({
        cookie: true
      }),
      uuid = require('node-uuid');
  
    router.get('/tampil', function(req, res) {
      return User.find(function(err, users) {
  
        if (err) {
          return res.render('500', {
              message : "Gagal Menampilkan Data"
          });
        }
        return res.render('user', {
          users: users
        });
  
      });
    });
  
    router.get('/tambah/user', csrfProtection, function(req, res) {
      return res.render('tambahUser', {
        csrfToken: req.csrfToken()
      });
    });
  
    router.post('/save/user', csrfProtection, function(req, res) {
      var user = new User({
        idUser: uuid.v4(),
        nama: req.body.nama,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
  
      return user.save(function(err) {
        if (err) {
            return res.render('500', {
                message : "Gagal Menambahkan Data"
            });
        }
        return res.redirect('/tampil');
      });
  
    });
  
    router.get('/edit/user/:idUser', csrfProtection, function(req, res) {
    
      var idUser = req.params.idUser;
  
      User.findOne({
        idUser: idUser
      }, function(err, user) {
        if (err) {
            return res.render('500', {
                message : "Data Tidak Ditemukan"
            });
        }
        return res.render('edit_user', {
          user: user,
          csrfToken: req.csrfToken()
        });
      });
    });
  
    router.post('/update/user/:idUser', csrfProtection, function(req, res) {
  
      var idUser = req.params.idUser;
  
      User.findOne({
        idUser: idUser
      }, function(err, user) {
  
        if (err) {
            return res.render('500', {
                message : "Gagal Mengubah Data Buku"
            });
        }
  
        user.nama = req.body.nama;
        user.email = req.body.email;
        user.username = req.body.username;
        user.password = req.body.password;
        user.save();
  
        res.redirect('/tampil');
      });
    });
  
    router.get('/delete/user/:idUser', function(req, res) {
      User.remove({
        idUser: req.params.idUser
      }, function(err) {
        if (err) {
            return res.render('500', {
                message : "Data Tidak Ditemukan"
            });
        }
        res.redirect('/tampil');
      });
    });
  
    module.exports = router;
  
  }).call(this);