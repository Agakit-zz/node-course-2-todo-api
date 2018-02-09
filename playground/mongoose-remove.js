const {ObjectID} = require ('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5a7daee08b09bb64b66fec32'}).then((todo) => {
console.log(todo);
});

//
// Todo.findByIdAndRemove('5a7cea9cb7756e2185f5bf7b').then((todo) => {
// console.log(todo);
// });
