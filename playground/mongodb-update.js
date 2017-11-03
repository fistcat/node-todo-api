// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connect to MongoDB server');
  //
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59fbb81ad94b0d45d27c4143")
  // },{
  //   $set: {
  //     completed : true
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59fb789fd94b0d45d27c2f4c")
  },{
    $set :{
      name : 'fistcat'
    },
    $inc :{
      age : 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
