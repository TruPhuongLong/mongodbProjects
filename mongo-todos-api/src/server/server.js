const express = require('express');
const bodyparser = require('body-parser');
const _ = require('lodash');

const { mongoose } = require('./db/mongoose');
const {ObjectID} = require('mongodb');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

//middleware:
app.use(bodyparser.json());

//request:
// request all todos:
app.get('/api/todos', (req, res) => {
    Todo.find()
    .then(todos => {
        res.send({ todos })
    })
    .catch(error => {
        res.status(400).send(error)
    })
})

// request todo with id:
app.get('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send()
    }
    Todo.findById(id)
    .then(todo => {
        if(!todo){
            res.status(404).send()
        }
        res.send({todo})
    })
    .catch(error => res.status(400).send(error))
})

// post todo:
app.post('/api/todos', (req, res) => {
    console.log('post todo')
    const newTodo = new Todo({ text: req.body.text })
    newTodo.save()
        .then(doc => res.send(doc))
        .catch(error => res.status(400).send(error))
})

//delete:
app.delete('/api/todos/:id', (req, res)=>{
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send()
    }
    Todo.findByIdAndRemove(id)
    .then(todo => {
        if(!todo){
            res.status(404).send()
        }
        res.send(todo)
    })
    .catch(error => res.status(400).send())
})

// update:
app.patch('/api/todos/:id', (req, res)=>{
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send()
    }
    const body = _.pick(req.body, ['text', 'complete'])
    if(_.isBoolean(body.complete) && body.complete){
        body.completeAt = new Date().getTime()
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
    .then(todo => {
        if(!todo){
            res.status(404).send()
        }
        res.send(todo)
    })
    .catch(error => res.status(400).send())
})

app.listen(port, () => console.log(`server listen on port ${port}`));

module.exports = { app }




