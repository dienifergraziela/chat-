const { MongoClient, objectID } = require("mongodb");

let singleton;

async function connect() {
    if(singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = cliente.db(process.env.DB_DATABASE);
    return singleton;
}

async function findAll(collection) {
    const db = await connect();
    return db.cfollection(collection).findAll().toArray();
}

async function findOne(collection, _id){
    const db = await connect();
    let obj = await db.collection(collection).find({'_id': new ObjectId(_id)}).toArray();
    if(obj)
        return obj[0];
    return false;
}

module.exports = { findAll }

async function insertOne(collection, objeto){
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
}

async function updateOne(collection, object, param){
    const db = await connect();
    let result = await db.collection(collection).updateOne(param, {$set: object});
    return result;
}

module.exports = {findAll}