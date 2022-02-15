const db = require('mongoose');

db.Promise = global.Promise;

// mongodb+srv://deyvid-admin:gBdVCfwk!S*7sR5@telegrom.kbmvw.mongodb.net/telegrom?retryWrites=true&w=majority
async function connect(url) {
    await db.connect(url, { useNewUrlParser:true,
    useUnifiedTopology: true,})
    console.log('[db] Conectado con Exito')   
}

module.exports = connect;
