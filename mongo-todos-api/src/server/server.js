const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');

const newTodo = new Todo({text: '   exercice    '})
newTodo.save()
.then(doc => console.log(JSON.stringify(doc, undefined, 2)))
.catch(error => console.log('unable to save ', error))


