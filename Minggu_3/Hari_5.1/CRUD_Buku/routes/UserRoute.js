var express = require('express');
var router = express.Router();
var Buku = require('../models/BukuModel');


router.get('/dashUser', (req, res) => {
  if(req.session.level == 'user'){

    Buku.find(function(err, bukus) {
  
      if (err) {
        return res.render('500', {
            message : "Gagal Menampilkan Data"
        });
      }
      return res.render('indexUser', {
        bukus: bukus,
        user : req.session.nama
      });
    });
  }
});

// router.get('/dashUser', (req, res) => {
//   // if(req.session.level == "user"){
//     Buku.find((err, buku) => {
//       if (!err) {
//           res.render("indexUser", {
//               message: req.session.nama ,
//           });
//       }
//       else {
//           console.log('Gagal Menampilkan Buku :' + err);
//           res.render('500',{
//               message:'gagal menampilkan halaman index'
//           });
//       }
//     });
//   // } else {
//   //   res.redirect('/tampilLogin');
//   // }
// });

module.exports = router;



// (function() {
//     'use strict';
  
//     var express = require('express'),
//       // User = require('../models/UserModel'),
//       // csrf = require('csurf'),
//       router = express.Router();

  
//       router.get('/dashUser', (req, res) => {
//         if(req.session.level=='user'){
//             Buku.find((err, docs) => {
//                 if (!err) {
//                     res.render("indexUser", {
//                         message: req.session.nama ,
//                     });
//                 }
//                 else {
//                     console.log('Gagal Menampilkan Buku :' + err);
//                     res.render('error',{
//                         message:'gagal menampilkan halaman index'
//                     });
//                 }
//             });
//         }else{
//             res.redirect('/tampilLogin');
//         }
//     });

//     module.exports = router;
  
//   }).call(this);