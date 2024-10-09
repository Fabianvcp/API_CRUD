require('dotenv').config();
const express = require('express');
const connectMongoDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
connectMongoDB();

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
