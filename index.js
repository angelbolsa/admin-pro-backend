const express = require('express');
const cors = require('cors');

//variables de entorno
require('dotenv').config();

const { dbConection } = require('./database/config');

const app = express();
dbConection();

app.use( cors() );

app.get('/', (req, res) => {
    res.json({
        "ok": true,
        "msg": 'Hola mundo'
    })    
})

app.listen(process.env.PORT, () => {
                        console.log('Servidor corriendo en el puerto: '+ process.env.PORT);
                    }
);