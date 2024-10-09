const jwt = require('jsonwebtoken');

// Simulación de usuarios (esto debería ser reemplazado por una base de datos)
const users = [
    { id: 1, email: 'test@gmail.com', password: 'root' }, // Por motivos de prueba
];

const login = async (req, res) => {
    const { email, password } = req.body;

    // Verificar si el usuario existe
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Generar un token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ token });
};

module.exports = { login };
