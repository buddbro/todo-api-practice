const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongoDB server.');   
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({_id: new ObjectID('5b717cdf6e55956c522a1c00')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
        
    // }, (err) => {
    //     console.log('Unable to fetch todos');
        
    // });

    db.collection('Todos').find({_id: new ObjectID('5b717cdf6e55956c522a1c00')}).count().then((count) => {
        console.log('Todos count: ' + count);        
    }, (err) => {
        console.log('Unable to fetch todos');
        
    });

    // db.close();
});