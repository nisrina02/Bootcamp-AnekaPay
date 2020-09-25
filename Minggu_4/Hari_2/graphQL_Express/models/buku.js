const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bukuSchema = new Schema({
    judul: {
        type : String,
        required: true
    },
    pengarang: {
        type: String,
        required: true
    },
    penerbit: {
        type: String,
        required: true
    },
    terbit: {
        type: Number,
        reqired: true
    }
})

module.exports = mongoose.model('buku', bukuSchema)
