var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cart = new Schema({
      nama: {
        type: 'String',
        required: true
      },
      jumlah: {
        type: 'String'
      },
      harga: {
        type: 'String',
        required: true
      },
      subtotal: {
          type : 'String',
          required: true
      }
});

module.exports = mongoose.model('cart', cart);