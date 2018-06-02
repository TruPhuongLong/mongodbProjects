const insertOne = (doc , db, dbCollectionName = 'Todos') => {
    if(!doc) doc = {text: 'do something'};
    db.collection(dbCollectionName)
    .insertOne(doc, (error, result)=> {
        if(error){
            return console.log('unable to insert', error)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })
}

const find = (db, dbCollectionName = 'Todos') => {
    db.collection(dbCollectionName)
    .find()
    .toArray()
    .then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch(error => {
        console.log('unable to todo', error)
    })
}

module.exports = {
    insertOne,
    find,
}