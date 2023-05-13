const db = require("./db");
async function registrarUsuario(nick) {
    return await db.insertOne("usuario",{"nick":nick});
    /*sera-que-tem-mais-ver*/
}

module.exports = {registrarUsuario}

async function insertOne(collection, objeto){
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
}