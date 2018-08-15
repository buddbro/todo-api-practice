const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongoDB server.');   
    }
    console.log('Connected to MongoDB server.');

    // deleteMAny - deleta alla workout
    // db.collection('Todos').findOneAndDelete({text: "Eat food"})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Couldnt perform action');
    //     });
    // delteOne
    // findOneAndDelete
    var duplicates = [];

    db.collection('Users').deleteMany({name: "Felix"});

    db.collection('Users').findOneAndDelete({name: "Kalle"})
        .then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });

    // db.close();
});