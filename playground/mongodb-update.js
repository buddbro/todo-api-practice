const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongoDB server.');   
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b742b4f7cb3a32026e01879')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // })
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('An error has occurred');
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b74201c9caf6773353b0e02')
    }, {
        $set: {
            name: "Felix"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    })
        .then((result) => {
            console.log(result);
        }, (err) => {
            console.log('Error while updating');
            
        });

    // db.close();
});