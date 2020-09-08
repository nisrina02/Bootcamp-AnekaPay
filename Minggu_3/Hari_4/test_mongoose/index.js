const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = mongoose.connect('mongodb://localhost:27017/mongo2',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = mongoose.Schema({
    nama : String,
    usia : Number,
    alamat : String,
    jenis_kelamin : String
})

const User = mongoose.model('user', userSchema)

const addUser = (user) => {
    User.create(user).then(user => {
        console.info('Tambah User')
    })
}

const findUser = (nama) => {
    var search = new RegExp(nama, 'i');
    user.findOne({nama : search}).then(nama => {
        console.info(nama)
    })
}

const updateUser =(nama, user) => {
    User.updateOne({nama}, user)
      .then(user => {
        console.info('Update User')
    })
}

const deleteUser = (nama) => {
    User.deleteOne({ nama })
      .then(user => {
        console.info('DeleteUser');
    });
}

const listUser = () => {
    User.find()
      .then(user => {
        console.log(user);
        console.log(`${user.length} User`);
      });
  }

module.exports = {
    addUser,
    findUser,
    updateUser,
    deleteUser,
    listUser
}
