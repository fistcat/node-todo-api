// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connect to MongoDB server');
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('59fb7467d94b0d45d27c2cd5')
  // }).toArray().then((docs)=> {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) =>{
  //   console.log('Unable to fetch todos', err);
  // })

  // db.collection('Todos').find().count().then((count)=> {
  //   console.log(`Todos count: ${count}`);
  // },(err) =>{
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({name:'fistcat'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=>{
    console.log('Unable to fetch Users', err);
  })

  // db.close();
});
