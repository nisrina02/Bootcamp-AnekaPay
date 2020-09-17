(function() {
    'use strict';
  
    var express = require('express'),
      Buku = require('../models/BukuModel'),
      csrf = require('csurf'),
      router = express.Router(),
      csrfProtection = csrf({
        cookie: true
      }),
      uuid = require('node-uuid');

      router.get('/tambahCart/:idBuku', (req, res) => {
        // console.log(req.params.id);
        Buku.findOneAndUpdate({
            idBuku: req.params.idBuku
        }, req.body, {
            new: true
        }, (err, buku) => {
            if (buku.stok <= 0) {
                res.render('error', {
                    err: 'Stok tidak ada'
                })
            }
            res.render('tambahCart', {
                buku: buku
            });
        })
    })

      // router.get('/tambah/cart/:idBuku', csrfProtection, function(req, res) {
    
      //   var idBuku = req.params.idBuku;
    
      //   Buku.findOne({
      //     idBuku: idBuku
      //   }, function(err, buku) {
      //     if (err) {
      //         return res.render('500', {
      //             message : "Data Tidak Ditemukan"
      //         });
      //     }
      //     return res.render('tambahCart', {
      //       buku: buku,
      //       csrfToken: req.csrfToken()
      //     });
      //   });
      // });

    router.post('/simpan/cart', function(req, res){
      req.session;
      if(!req.session.cart){
        req.session.cart = [];
      }

      req.session.cart.push({
        // username: req.session.username,
        idBuku: req.body.idBuku,
        nama: req.body.judul,
        harga: req.body.harga,
        jumlah: req.body.jumlah,
        subtotal: req.body.harga*req.body.jumlah
      });
      res.redirect('/cart');
    });

    router.get('/cart', function(req, res){
      if(!req.session.cart){
        res.send('Keranjang Kosong');
      } else {
        var harga1 = 0;
        var harga2 = 0;
        for(let i = 0; i < req.session.cart.length; i++){
          var harga = req.session.cart[i].harga;
          var jumlah = req.session.cart[i].jumlah;
          harga1 = harga * jumlah;
          harga2 = harga2 + harga1;
        }
        res.render('cart', {
          keranjang: req.session.cart,
          Total: harga2
        })
        console.log(req.session.cart)
      }
    });

    router.get('/edit/cart/:idBuku', (req, res) => {
      var idBuku = req.params.idBuku
      var cart = req.session.cart
      var indexcart = cart.findIndex((acc => acc.idBuku == idBuku))
      res.render('editCart',{
          data: cart[indexcart]
      })
  })

    router.post('/edit/cart/:idBuku', (req, res) => {
      if (!req.session.cart) {
          req.session.cart = []
      }
      var idBuku = req.params.idBuku
      var cart = req.session.cart
  
      var indexcart = cart.findIndex((array => array.idBuku == idBuku))
      console.log(cart[indexcart]);
  
      cart[indexcart].jumlah = req.body.jumlah,
      cart[indexcart].subtotal = req.body.jumlah * req.body.harga
  
      res.redirect('/cart')
  })

    router.get('/hapusCart/:idBuku', (req, res) => {
      if (!req.session.cart) {
          req.session.cart = []
      }
      var idBuku = req.params.idBuku
      var cart = req.session.cart.reduce((acc, c) => {
          if (c.idBuku !== idBuku) {
              acc.push(c)
          } else {
  
          }
          return acc;
      }, [])
      req.session.cart = cart
      res.redirect('/cart')
  })
  
    module.exports = router;
  
  }).call(this);