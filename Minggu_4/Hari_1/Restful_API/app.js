var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/kantor";
const port = process.env.PORT || 2900;
var Pegawai = require('./controllers/Pegawai');
var Departemen = require('./controllers/Departemen');

mongoose.Promise = global.Promise;
mongoose
    .connect(mongoUrl,{ useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/pegawai', Pegawai);
app.use('/departemen', Departemen);

app.listen(port,()=>{
    console.log("server running on port" + port);
});