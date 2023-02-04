const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        console.log("Connected Successfully to server");
        const database = client.db('fruitsDB');
        const current_collection = database.collection('fruits');
        const docs = [
            {
              name: "fig",
              score: 8,
              review: "Great Fruit",
            },
            {
              name: "loki",
              score: 6,
              review: "Kind Sour",
            },
            {
              name: "chiko",
              score: 9,
              review: "Great Stuff!",
            },
        ]
        const option={ordered: true};
        const result = await current_collection.insertMany(docs,options);
        const inserted_document_count = await result.insertedCount;
        console.log(inserted_document_count+" documents were inserted");
    }
    finally{
        //Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
