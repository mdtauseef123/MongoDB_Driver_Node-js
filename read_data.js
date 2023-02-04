const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        console.log("Connected Successfully to server");
        const database = client.db('fruitssDB');
        const current_collection = database.collection('fruits2');
        if ((await current_collection.countDocuments()) === 0) {
            console.log("No documents found!");
        }
        else
            console.log("Priniting");
        console.log("Total Documents:- "+await current_collection.countDocuments());
        await fetch_data.forEach((fruit) => {
            console.log(fruit);
        });
    }
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
