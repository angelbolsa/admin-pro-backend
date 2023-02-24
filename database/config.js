const mongoose = require('mongoose');

const dbConection = async() => {
   try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('Conexión realizada correctamente');
   } catch (error) {
        console.log(error);
        throw new mongoose.Error('Error al conectar la base de datos.');
   }
}

module.exports = {
    dbConection
}