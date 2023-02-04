const MongoClient = require("mongodb").MongoClient;
 

const uri = "mongodb://0.0.0.0:27017/";
 

const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        console.log("Connected Successfully to server");
    } 
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
 
run().catch(console.dir);
