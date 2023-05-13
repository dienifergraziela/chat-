const token = require("../util/token");
const usuarioModel = require("../model/usuarioModel");

exports.entrar=async(nick)=>{
    let resp = await usuarioModel.registrarUsuario(nick);/*registrarUsuario */
    if(resp.insertedID){
        return {"idUser":resp.insertedID,
                "token": await token.setToken(JSON.stringify(resp.insertedID).replace(/"/g, ''),nick),
                "nick":nick
    }
}

}