const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59fc8c040c794e1e705ed6f5';

// var id = '59fca995b24b3a2d5895b26111';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not value');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');;
//   }
//   console.log('TodoByID', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user)=>{
  if (!user) {
    return console.log('Id not found');
  }
  console.log('UserID found', user );
},(e) => {
  console.log(e);
})
