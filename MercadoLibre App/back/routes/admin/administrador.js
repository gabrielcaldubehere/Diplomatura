var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModels');

/* GET administrador. */
router.get('/', async function (req, res, next) {

    var productos = await productosModel.getProductos();

    res.render('admin/administrador',
        //carpeta views/admin/administrador.hbs
        {
            layout: 'admin/layout', //carpeta views/admin/layout.hbs
            nombre: req.session.nombre,
            productos
        });
});

// Boton Agregar Nuevos Productos

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', //agregar.hbs
        {
            layout: 'admin/layout'
        })
})


//Guardar Nuevo Producto

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.producto != "" && req.body.cantidad != "" && req.body.precio != "") {
            await productosModel.insertarProducto(req.body);
            res.redirect('/admin/administrador')
        } else {
            res.render('sadmin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se han cargado los datos, intente mas tarde'

        })

    }
})

//Eliminar Producto
router.get('/eliminar/:id', async (req, res, next) => {

    var id = req.params.id;

    await productosModel.eliminarProducto(id);

    res.redirect('/admin/administrador');
})

//Llamar Modificar Producto hbs

router.get('/modificar/:id', async (req, res, next) => {

    var id = req.params.id;
    var modificar = await productosModel.seleccionarProductoid(id);

    res.render('admin/modificar', //modificar.hbs
        {
            layout: 'admin/layout',
            modificar
        })

})

//Realizar Modificacion del Producto

router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            producto: req.body.producto,
            cantidad: req.body.cantidad,
            precio: req.body.precio
        }

        await productosModel.modificarProducto(obj, req.body.id);
        res.redirect('/admin/administrador');

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico el producto'

        })

    }
})




module.exports = router;