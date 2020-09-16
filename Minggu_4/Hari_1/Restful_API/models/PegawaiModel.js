var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pegawai = new Schema({
      nama: {
        type: 'String',
        required: true
      },
      usia: {
        type: 'Number',
        require: true
      },
      jabatan: {
        type: 'String',
        required: true
      }
});

module.exports = mongoose.model('pegawai', pegawai);