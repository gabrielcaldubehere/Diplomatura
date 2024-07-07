var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/login', //carpeta views/admin/login.hbs
        {
            layout: 'admin/layout' //carpeta views/admin/layout.hbs
        });
});

module.exports = router;
