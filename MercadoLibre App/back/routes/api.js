var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModels');
const { route } = require('.');

router.get('/administrador', async function (req, res, next) {
    let productos = await productosModel.getProductos();

    productos = productos.map(productos => {
        if (productos.img_id) {
            const imagen = cloudinary.url(productos.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...productos,
                imagen
            }
        } else {
            return {
                ...productos,
                imagen: ''
            }
        }
    });
    res.json(productos);

})

module.exports = router;