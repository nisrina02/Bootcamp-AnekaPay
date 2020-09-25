const { buildSchema } = require("graphql")

module.exports = buildSchema(`
  type Buku {
    _id: ID!
    judul: String!
    pengarang: String!
    penerbit: String!
    terbit: Int
  }
  type Hasil {
      hasil : String
  }
  input BukuInput {
    judul: String!
    pengarang: String!
    penerbit: String!
    terbit: Int
  }
  input NamaBuku {
      judul: String!
  }
  type Query {
    buku:[Buku!]
    tambahBuku(buku:BukuInput): Buku
    cari(namabuku:NamaBuku): [Buku!]
    hapus(namabuku:NamaBuku): Hasil
    editBuku(namabuku:NamaBuku,buku:BukuInput): Hasil
  }
  schema {
    query: Query
  }
`)