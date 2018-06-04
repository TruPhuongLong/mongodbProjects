const express = require('express');
const bodyparser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

//middleware:
app.use(bodyparser.json());

//request:
app.get('/api/todos', (req, res) => {
    Todo.find().then(docs => {
        res.send(docs)
    })
    .catch(error => {
        res.status(400).send(error)
    })
})

app.post('/todos', (req, res) => {
    console.log('post todo')
    const newTodo = new Todo({ text: req.body.text})
    newTodo.save()
        .then(doc => res.send(doc))
        .catch(error => res.status(400).send(error))
})

app.listen(port, () => console.log(`server listen on port ${port}`));

module.exports = {app}




