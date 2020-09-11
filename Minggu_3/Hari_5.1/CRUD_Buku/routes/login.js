const express = require('express');
var crypto = require('crypto');
const router = express.Router();
var User = require('../models/UserModel');

var sess;

    router.get('/tampilLogin',function(req,res){
      sess=req.session;
      if(sess.email){
        return res.redirect('/admin');
      }
      res.render('login');
    });

    router.post('/login/check', (req, res) => {
        User.findOne({email: req.body.email, password: req.body.password}, (err,user) =>{
            if(!err){
                if(user){
                    //sess = req.session;
                    req.session.id = user._id;
                    req.session.nama = user.nama;
                    req.session.email = user.email;
                    res.redirect('/');
                }else{
                    res.render('500',{
                        message:'Username atau Password Salah'
                    });
                }
            }else{
                console.log('Terjadi kesalahan saat login : ' + err);
                res.render('500',{
                message:'Ada kesalahan data'
            });
            }
        })
    });
  
 router.get('/logout',(req,res) => {
      req.session.destroy((err) => {
          if(err) {
              return console.log(err);
          }
          res.redirect('/tampilLogin');
      });
  
  });

  module.exports = router;