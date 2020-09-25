const Buku = require('../../models/buku')

module.exports = {
    buku: async() => {
        try{
            const tampilBuku = await Buku.find()
            return tampilBuku.map(buku => {
                return{
                    ...buku._doc,
                    _id: buku.id
                }
            })
        } catch (error) {
            throw error
        }
    },

    tambahBuku: async args => {
        try{
            const {judul, pengarang, penerbit, terbit} = args.buku
            const buku = new Buku({
                judul,
                pengarang,
                penerbit,
                terbit,
            })
            const newBuku = await buku.save()
            return {
                ...newBuku._doc,
                _id: newBuku.id
            }
        } catch (error) {
            throw error
        }
    },

    cari: async args => {
        try {
            const cari = args.namabuku
          const caribuku = await Buku.find(cari)
          return caribuku.map(buku => {
            return {
              ...buku._doc,
            }
          })
        } catch (error) {
          throw error
        }
    },

    hapus: async args => {
        try {
          const cari = args.namabuku
          await Buku.remove(cari)
          return { hasil:"Success" }
        } catch (error) {
          throw error
        }
    },

    editBuku: async args => {
        try {
          const cari = args.namabuku
          const { judul, pengarang, penerbit, terbit } = args.buku
          await Buku.findOneAndUpdate( cari, { 
              judul : judul, 
              pengarang : pengarang, 
              penerbit : penerbit, 
              terbit : terbit })
          return { hasil:"Success" }
        } catch (error) {
          throw error
        }
    },
}