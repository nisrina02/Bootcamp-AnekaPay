const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'latihan_mongoDB';

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  // Insert a single document
//   db.collection('buku').insertOne({a:1}, function(err, r) {
//     assert.equal(null, err);
//     assert.equal(1, r.insertedCount);

    // Insert multiple documents
    db.collection('buku').insertMany([
        {
            judul : "Hujan",
            pengarang : "Tereliye"
        }, 
        {
            judul : "Anomaly",
            pengarang : "DianMu"
        }
    ], function(err, r) {
      assert.equal(null, err);
    //   assert.equal(2, r.insertedCount);

      client.close();
    });
//   });
});