var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Hola soy la ruta1');
});

module.exports = router;