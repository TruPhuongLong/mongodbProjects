const {MongoClient, ObjectID} = require('mongodb');
const {
    insertOne, 
    find, 
    deleteOne, 
    deleteMany, 
    findOneAndDelete, 
    findOneAndUpdate
} = require('./crud');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const dbCollectionName = 'Todos';

MongoClient.connect(url, (error, client)=>{
    if(error){
        return console.log('unable to connect to mongo Server');
    }
    console.log('connected to server');
    const db = client.db(dbName);


    // insertOne(null, db)
    // deleteMany({text: 'do something'}, db)
    // findOneAndDelete({text: 'do something'}, db)
    findOneAndUpdate(db, 'Users',
         { name: 'peter' }, 
         { $set: { text: 'read book 3' }, $inc: {age: 3} }, 
         { returnOriginal: false })
    

    client.close();
})
