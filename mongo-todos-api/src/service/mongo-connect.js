const {MongoClient, ObjectID} = require('mongodb');
const {insertOne, find} = require('./crud');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const dbCollectionName = 'Todos';

MongoClient.connect(url, (error, client)=>{
    if(error){
        return console.log('unable to connect to mongo Server');
    }
    console.log('connected to server');
    const db = client.db(dbName);

    // insertOne(undefined, db)

    find(db)

    client.close();
})
