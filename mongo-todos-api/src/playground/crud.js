const insertOne = (doc, db, dbCollectionName = 'Todos') => {
    if (!doc) doc = { text: 'do something' };
    db.collection(dbCollectionName)
        .insertOne(doc, (error, result) => {
            if (error) {
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

const deleteOne = (option, db, dbCollectionName = 'Todos') => {
    db.collection(dbCollectionName)
        .deleteOne(option)
        .then((res) => {
            console.log(res.result);
        })
        .catch(error => {
            console.log('unable to delete', error)
        })
}

const deleteMany = (option, db, dbCollectionName = 'Todos') => {
    db.collection(dbCollectionName)
        .deleteMany(option)
        .then(res => {
            console.log(res.result)
        })
        .catch(error => {
            console.log('unable to deleteMany', error)
        })
}

const findOneAndDelete = (option, db, dbCollectionName = 'Todos') => {
    db.collection(dbCollectionName)
        .findOneAndDelete(option)
        .then(res => console.log(JSON.stringify(res)))
        .catch(error => console.log('unable to find one and delete', error))
}

const findOneAndUpdate = (db, dbCollectionName, ...option) => {
    const [condition, valueUpdate, returnOriginal] = option
    db.collection(dbCollectionName)
        .findOneAndUpdate(condition, valueUpdate, returnOriginal)
        .then(res => console.log(JSON.stringify(res, undefined, 2)))
        .catch(error => console.log('unable to find one and update', error))
}

module.exports = {
    insertOne,
    find,
    deleteOne,
    deleteMany,
    findOneAndDelete,
    findOneAndUpdate,
}