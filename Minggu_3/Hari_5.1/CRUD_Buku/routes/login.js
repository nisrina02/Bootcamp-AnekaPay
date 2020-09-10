const express = require('express');
var crypto = require('crypto');
const router = express.Router();
var User = require('../models/User');

var secret = 'apaya';
var sess;

    router.get('/tampilLogin',function(req,res){
      sess=req.session;
      if(sess.email){
        return res.redirect('/admin');
      }
      res.render('login');
    });

    router.post('/login/check', (req, res) => {
        sess = req.session;

        User.findOne({
            email : req.body.email,
            password : req.body.password
        }, function(err, user) {
            if(err) {
                return res.render('500', {
                    message : "Data Tidak Ditemukan"
                });
            }
            if(user){
                sess.email = user.email;
                sess.logged_in = true;

                res.render('index');
            } 
            else {
                res.render('500');
            }
        })
    })

//     router.post('/login/check',(req,res) => {
//         sess = req.session;
            
//             console.log("Kalimat");
//             console.log(req.body);
//             User.findOne({ email: req.body.email, password: req.body.password }, function(err, user) {
//             if (err) throw err;

//             if (user)
//             {
//             sess.email = user.email;
//             sess.admin = user.admin;
//             sess.logged_in = true;

//             res.render('index');
        
//             } else {
//                 res.render('500');
//             }
//             });
             
// });

    router.get('/admin',(req,res) => {
      sess = req.session;
      if(sess.email) {
          res.write(`<h1>Hello ${sess.email} </h1><br>`);
          res.end('<a href='+'/logout'+'>Logout</a>');
      }
      else {
          res.write('<h1>Please login first.</h1>');
          res.end('<a href='+'/'+'>Login</a>');
      }
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