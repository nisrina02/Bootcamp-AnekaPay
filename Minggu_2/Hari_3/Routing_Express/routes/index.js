var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
router.post('/post', function (req, res) {
  res.send('POST request to the homepage')
})

/* LATIHAN ROUTING */
router.get('/random.text', function (req, res) {
  res.send('random.text')
})

router.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

router.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

// router.get(/a/, function (req, res) {
//   res.send('/a/')
// })

router.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

router.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

router.get('/example/c', [cb0, cb1, cb2])

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

router.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
})

/* TUGAS 1 */
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
    if (bil2 != 0) {
      var hasil = bil1 / bil2;
      res.send("Hasil pembagian adalah : " + hasil);
  } else {
      res.send('Pembagi Tidak Boleh 0!')
  }

  } else {
    res.send("Angka yang anda masukkan salah");
  }
});

/* TUGAS 2 */
router.get('/server/tambah/:bil1/:bil2', function (req, res) {
  var bil1 = parseInt(req.params.bil1);
  var bil2 = parseInt(req.params.bil2);
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
})

router.get('/server/kurang/:bil1/:bil2', function (req, res) {
  var bil1 = parseInt(req.params.bil1);
  var bil2 = parseInt(req.params.bil2);
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
})

router.get('/server/kali/:bil1/:bil2', function (req, res) {
  var bil1 = parseInt(req.params.bil1);
  var bil2 = parseInt(req.params.bil2);
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
})

router.get('/server/bagi/:bil1/:bil2', function (req, res) {
  var bil1 = parseInt(req.params.bil1);
  var bil2 = parseInt(req.params.bil2);
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
    if (bil2 != 0) {
      var hasil = bil1 / bil2;
      res.send("Hasil pembagian adalah : " + hasil);
  } else {
      res.send('Pembagi Tidak Boleh 0!')
  }

  } else {
    res.send("Angka yang anda masukkan salah");
  }
})

module.exports = router;
