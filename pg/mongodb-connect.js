// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Error connecting to db: ${err}`);
    }
    console.log('Connected to mongodb server');

    db.collection('Todos')
        .find({
            _id: new ObjectID("5899c8fc0670390870668854")
        })
        .toArray()
        .then((values) => {
            console.log('Todos:');
            console.log(JSON.stringify(values, null, 1));
        })
        .catch((reason) => {
            console.log(`Failed for reason: ${reason}`);
        });
    db.close();
});