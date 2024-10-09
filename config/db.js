const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error conectando a MongoDB', error);
        process.exit(1); // Salir si hay un error crítico
    }
};

module.exports = connectMongoDB;
