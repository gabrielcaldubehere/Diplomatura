var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Hola soy la ruta3');
});

module.exports = router;