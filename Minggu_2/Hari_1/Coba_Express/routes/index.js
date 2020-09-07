var express = require('express');
var router = express.Router();
var view = __dirname;
var pat = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tambah', function(req, res){
  res.render('tambah');
})

router.post('/tambah', function(req, res){
  var bil1 = parseInt(req.body.num1);
  var bil2 = parseInt(req.body.num2);
  var check = 0;

  if(isNaN(bil1)){
    console.log("Bilangan 1 bukan angka");
    check = 1;
  }
  if(isNaN(bil2)){
    console.log("Bilangan 2 bukan angka");
    check = 1;
  }
  if(check == 0){
    var hasil = bil1 + bil2;
    res.send("Hasil penjumlahan adalah : " + hasil);

  } else {
    res.send("Angka yang anda masukkan salah");
  }
});

router.get('/kurang', function(req, res){
  res.render('kurang');
})

router.post('/kurang', function(req, res){
  var bil1 = parseInt(req.body.num1);
  var bil2 = parseInt(req.body.num2);
  var check = 0;

  if(isNaN(bil1)){
    console.log("Bilangan 1 bukan angka");
    check = 1;
  }
  if(isNaN(bil2)){
    console.log("Bilangan 2 bukan angka");
    check = 1;
  }
  if(check == 0){
    var hasil = bil1 - bil2;
    res.send("Hasil pengurangan adalah : " + hasil);

  } else {
    res.send("Angka yang anda masukkan salah");
  }
});

router.get('/kali', function(req, res){
  res.render('kali');
})

router.post('/kali', function(req, res){
  var bil1 = parseInt(req.body.num1);
  var bil2 = parseInt(req.body.num2);
  var check = 0;

  if(isNaN(bil1)){
    console.log("Bilangan 1 bukan angka");
    check = 1;
  }
  if(isNaN(bil2)){
    console.log("Bilangan 2 bukan angka");
    check = 1;
  }
  if(check == 0){
    var hasil = bil1 * bil2;
    res.send("Hasil perkalian adalah : " + hasil);

  } else {
    res.send("Angka yang anda masukkan salah");
  }
});

router.get('/bagi', function(req, res){
  res.render('bagi');
})

router.post('/bagi', function(req, res){
  var bil1 = parseInt(req.body.num1);
  var bil2 = parseInt(req.body.num2);
  var check = 0;

  if(isNaN(bil1)){
    console.log("Bilangan 1 bukan angka");
    check = 1;
  }
  if(isNaN(bil2)){
    console.log("Bilangan 2 bukan angka");
    check = 1;
  }
  if(check == 0){
    var hasil = bil1 / bil2;
    res.send("Hasil pembagian adalah : " + hasil);

  } else {
    res.send("Angka yang anda masukkan salah");
  }
});

router.get('/calendar', function(req, res){
  res.render('calendar');
})

router.get('/kalkulator', function(req, res){
  res.render('kalkulator');
})

module.exports = router;
