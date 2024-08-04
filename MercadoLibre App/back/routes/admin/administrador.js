var express = require('express');
var router = express.Router();

/* GET administrador. */
router.get('/', function (req, res, next) {
    res.render('admin/administrador', //carpeta views/admin/administrador.hbs
        {
            layout: 'admin/layout', //carpeta views/admin/layout.hbs
            persona: req.session.nombre

        });
});

module.exports = router;