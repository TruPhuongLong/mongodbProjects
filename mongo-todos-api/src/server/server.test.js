const expect = require('expect');
const request = require('supertest');

const { app } = require('./server');
const { Todo } = require('./models/todo');

beforeEach(done => {
    Todo.remove()
        .then(() => done())
})

describe('Post /todos', () => {
    // it('should create a new Todo', (done) => {
    //     const text = 'something to do'

    //     request(app)
    //         .post('/todos')
    //         .send({ text })
    //         .expect(200)
    //         .expect(res => {
    //             expect(res.body.text).toBe(text)
    //         })
    //         .end((error, res) => {
    //             if (error) {
    //                 return done(error);
    //             }
    //             Todo.find()
    //                 .then(docs => {
    //                     expect(docs.length).toBe(1)
    //                     expect(docs[0].text).toBe(text)
    //                     done()
    //                 })
    //                 .catch(error => done(error))
    //         });
    // })

    it('should be invalid post todo', done => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((error, res)=>{
            if(error){
                done(error)
            }
            Todo.find()
            .then(todos => {
                expect(todos.length).toBe(0)
                done()
            })
            .catch(error => done(error))
        })
    })
})