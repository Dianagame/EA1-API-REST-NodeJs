const {Router} = require('express');
const router = Router();

router.post('/', function(req, res){
    res.send('Hola mundo estoy creando un inventario post');
});

router.get('/', function(req, res){
    res.send('Hola mundo estoy creando un inventario get');
});

router.put('/', function(req, res){
    res.send('Hola mundo estoy creando un inventario put');
});

module.exports = router;