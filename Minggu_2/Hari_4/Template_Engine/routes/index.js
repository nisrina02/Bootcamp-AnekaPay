var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/halo', function(req, res){
  res.render('Hello');
})

router.post('/halo', (req, res) => {
  var nama = req.body.nama;
  res.send("Hello, " + nama);
})

module.exports = router;
