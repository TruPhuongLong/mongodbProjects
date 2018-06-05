const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb');

const { app } = require('./server');
const { Todo } = require('./models/todo');

//================================Test post=========================================
// beforeEach(done => {
//     Todo.remove()
//         .then(() => done())
// })

// describe('Post /todos', () => {
//     it('should create a new Todo', (done) => {
//         const text = 'something to do'

//         request(app)
//             .post('/api/todos')
//             .send({ text })
//             .expect(200)
//             .expect(res => {
//                 expect(res.body.text).toBe(text)
//             })
//             .end((error, res) => {
//                 if (error) {
//                     return done(error);
//                 }
//                 Todo.find()
//                     .then(docs => {
//                         expect(docs.length).toBe(1)
//                         expect(docs[0].text).toBe(text)
//                         done()
//                     })
//                     .catch(error => done(error))
//             });
//     })

//     // it('should be invalid post todo', done => {
//     //     request(app)
//     //     .post('/api/todos')
//     //     .send({})
//     //     .expect(400)
//     //     .end((error, res)=>{
//     //         if(error){
//     //             done(error)
//     //         }
//     //         Todo.find()
//     //         .then(todos => {
//     //             expect(todos.length).toBe(0)
//     //             done()
//     //         })
//     //         .catch(error => done(error))
//     //     })
//     // })
// })




// =================================test get /api/todos/:id ===========================
const todos = [
    { text: "first todo with id", _id: new ObjectId() },
    { text: "second todo with id", _id: new ObjectId() },
]

beforeEach(done => {
    Todo.remove().then(()=>{
        Todo.insertMany(todos)
    })
    .then(done)

})

describe('test GET /api/todos/id', () => {
    // it('should get todo with id', (done) => {
    //     request(app)
    //     .get(`/api/todos/${todos[0]._id}`)
    //     .expect(200)
    //     .expect(res => {
    //         expect(res.body.todo.text).toBe(`${todos[0].text}`)
    //     })
    //     .end(done)
    // })

    // not found 404:
    // it('should be valid object id but not found', done => {
    //     request(app)
    //     .get(`/api/todos/${new ObjectId().toHexString()}`)
    //     .expect(404)
    //     .end(done)
    // })

    // invalid object id: 404:
    it('should be invalid id get 404', done => {
        request(app)
        .get(`/api/todos/4444ssfsfsf`)
        .expect(404)
        .end(done)
    })

})