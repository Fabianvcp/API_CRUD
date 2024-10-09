const Product = require('../models/productModel');

// Listar todos los productos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
        const newProduct = new Product({ name, price, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto' });
    }
};

// Crear varios productos
exports.createProducts = async (req, res) => {
    const productsData = req.body; // Esperamos que sea un array de productos
    try {
        const newProducts = await Product.insertMany(productsData);
        res.status(201).json(newProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear productos', error });
    }
};


// Modificar un producto existente
exports.updateProduct = async (req, res) => {
    const { id } = req.params; // Obtiene el ID desde los parámetros
    const { name, price, description } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });
        
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar producto' });
    }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto' });
    }
};
