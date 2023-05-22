const db = require("./db");
function listarSalas() {
    return db.findAll("salas");
}

function listarSalas() {
    return[
        {
            "_id":{
                "$oid": "643ece43ea11e6e5b0421f10"
            },
            "nome":"Guerreiros da InfoCimol",
            "tipo":"publica"
        },{
            "_id": {
                "$oid": "64ece1ea11e6e5b0421f12"
            },
            "nome": "Só os confirmados da INFO",
            "tipo": "privada",
            "chave": "at8q4haw"
        },{
            "_id": {
                "$iod": "643f22a2ea11e6e50421f18"
            },
            "nome": "Guerreiros da INFO",
            "tipo": "publico"
        }
    ];
}


async function buscarSala(idsala){
    return db.findOne("salas", idsala);
}

async function atualizarMensagens(sala){
    return await db.updateOne("salas", sala,{_id:sala._id});
}

async function buscarMensagens(idsala, timesstamp){
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs = [];
        sala.msgs.forEach(msg => {
            if(msg.timestamp > timesstamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return [];
}

module.exports = {listarSalas}