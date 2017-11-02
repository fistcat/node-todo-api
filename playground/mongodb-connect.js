// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connect to MongoDB server');

  // db.collection('TodoApp').insertOne({
  //   text: 'Something to do',
  //   complete: false
  // },(err, result) =>{
  //   if (err) {
  //     return console.log('Unable to inser todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'fistcat',
  //   age: 26,
  //   location: 'New York'
  // },(err, result)=>{
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   console.log(JSON. stringify(result.ops,undefined,2));
  // })

  db.close();
});
