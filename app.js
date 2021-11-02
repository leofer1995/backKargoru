const express = require('express');
const cors = require('cors');
const server = express();
const sequelize = require('./src/database/db');
const router = require('./src/routes/index');
require('./src/database/relations')
//setting
const port = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded({extended: false}))
server.use(cors());

//rutes
server.use('/', router)

//inicio el servidor
server.listen(port, '0.0.0.0', ()=>{
    console.log(`connect http://localhost:${port}`);
    //coneccion con db
    sequelize.sync({force: true}).then(() => {
        console.log('Conectado con la DB')
    }).catch(error => {
        console.log('Ha ocurrido un error conectando con DB', error)
    });
});